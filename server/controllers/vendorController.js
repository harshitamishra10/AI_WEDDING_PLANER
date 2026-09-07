import Vendor from "../models/vendor.js";

/* ------------------------------------------------------------------ */
/* Create a new vendor listing (vendor onboarding)                     */
/* ------------------------------------------------------------------ */
export const createVendor = async (req, res) => {
  try {
    const {
      businessName,
      type,
      description,
      city,
      state,
      country,
      address,
      pricePerDay,
      guestMin,
      guestMax,
      amenities,
      contactEmail,
      contactPhone,
    } = req.body;

    if (!businessName || !type || !city || !pricePerDay || !guestMin || !guestMax) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const imagePaths = (req.files || []).map(
      (file) => `/uploads/vendors/${file.filename}`
    );

    const parsedAmenities =
      typeof amenities === "string"
        ? amenities.split(",").map((a) => a.trim()).filter(Boolean)
        : Array.isArray(amenities)
        ? amenities
        : [];

    const vendor = await Vendor.create({
      ownerUser: req.user.id,
      businessName,
      type,
      description,
      location: { city, state, country, address },
      pricePerDay,
      guestCapacity: { min: guestMin, max: guestMax },
      amenities: parsedAmenities,
      images: imagePaths,
      contactEmail,
      contactPhone,
    });

    res.status(201).json({
      success: true,
      message: "Venue listed successfully",
      vendor,
    });
  } catch (error) {
    console.log("Create Vendor Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Search / filter vendors, with recommendation scoring                */
/* ------------------------------------------------------------------ */
export const getVendors = async (req, res) => {
  try {
    const { location, type, budget, guests } = req.query;

    const filter = { isApproved: true };

    if (location) {
      filter["location.city"] = { $regex: location, $options: "i" };
    }

    if (type) {
      filter.type = type;
    }

    const vendors = await Vendor.find(filter).lean();

    const targetBudget = budget ? Number(budget) : null;
    const targetGuests = guests ? Number(guests) : null;

    const scored = vendors.map((v) => {
      let score = 0;

      // Rating contributes up to 40 points
      score += (v.rating / 5) * 40;

      // Budget fit contributes up to 35 points
      if (targetBudget) {
        if (v.pricePerDay <= targetBudget) {
          const utilization = v.pricePerDay / targetBudget; // closer to 1 = better use of budget
          score += 20 + utilization * 15;
        } else {
          const overBy = (v.pricePerDay - targetBudget) / targetBudget;
          score += Math.max(0, 20 - overBy * 40);
        }
      } else {
        score += 20;
      }

      // Guest capacity fit contributes up to 25 points
      if (targetGuests) {
        if (
          targetGuests >= v.guestCapacity.min &&
          targetGuests <= v.guestCapacity.max
        ) {
          score += 25;
        } else {
          score += 5;
        }
      } else {
        score += 15;
      }

      return { ...v, recommendationScore: Math.round(score) };
    });

    scored.sort((a, b) => b.recommendationScore - a.recommendationScore);

    const withBestMatch = scored.map((v, index) => ({
      ...v,
      isBestMatch: index < 3 && scored.length > 3,
    }));

    res.status(200).json({
      success: true,
      count: withBestMatch.length,
      vendors: withBestMatch,
    });
  } catch (error) {
    console.log("Get Vendors Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Get a single vendor by ID                                           */
/* ------------------------------------------------------------------ */
export const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({ success: false, message: "Venue not found" });
    }

    res.status(200).json({ success: true, vendor });
  } catch (error) {
    console.log("Get Vendor Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Get listings created by the logged-in vendor/user                   */
/* ------------------------------------------------------------------ */
export const getMyVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({ ownerUser: req.user.id });
    res.status(200).json({ success: true, vendors });
  } catch (error) {
    console.log("Get My Vendors Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
