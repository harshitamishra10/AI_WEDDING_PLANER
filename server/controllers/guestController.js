import Guest from "../models/guest.js";

/* ------------------------------------------------------------------ */
/* Add a new guest                                                     */
/* ------------------------------------------------------------------ */
export const createGuest = async (req, res) => {
  try {
    const { name, email, phone, side, groupSize, notes } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: "Guest name is required." });
    }

    const guest = await Guest.create({
      owner: req.user.id,
      name,
      email,
      phone,
      side,
      groupSize: groupSize || 1,
      notes,
    });

    res.status(201).json({ success: true, guest });
  } catch (error) {
    console.log("Create Guest Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Get all guests belonging to the logged-in user                      */
/* ------------------------------------------------------------------ */
export const getMyGuests = async (req, res) => {
  try {
    const guests = await Guest.find({ owner: req.user.id }).sort({ createdAt: -1 });

    const stats = {
      totalGuests: guests.length,
      confirmed: guests.filter((g) => g.rsvpStatus === "Confirmed").length,
      pending: guests.filter((g) => g.rsvpStatus === "Pending").length,
      declined: guests.filter((g) => g.rsvpStatus === "Declined").length,
      totalHeadcount: guests
        .filter((g) => g.rsvpStatus === "Confirmed")
        .reduce((sum, g) => sum + (g.groupSize || 1), 0),
    };

    res.status(200).json({ success: true, guests, stats });
  } catch (error) {
    console.log("Get Guests Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Update a guest (details or RSVP status)                             */
/* ------------------------------------------------------------------ */
export const updateGuest = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);

    if (!guest) {
      return res.status(404).json({ success: false, message: "Guest not found" });
    }

    if (guest.owner.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    const allowedFields = [
      "name",
      "email",
      "phone",
      "side",
      "groupSize",
      "rsvpStatus",
      "notes",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        guest[field] = req.body[field];
      }
    });

    await guest.save();

    res.status(200).json({ success: true, guest });
  } catch (error) {
    console.log("Update Guest Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Delete a guest                                                       */
/* ------------------------------------------------------------------ */
export const deleteGuest = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);

    if (!guest) {
      return res.status(404).json({ success: false, message: "Guest not found" });
    }

    if (guest.owner.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    await guest.deleteOne();

    res.status(200).json({ success: true, message: "Guest removed" });
  } catch (error) {
    console.log("Delete Guest Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
