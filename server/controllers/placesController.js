import { getManualVenuePhoto } from "../config/venuePhotos.js";

const OSM_HEADERS = {
  "User-Agent": "WedAI-Wedding-Planner/1.0 (contact: hello@wedai.com)",
};

const fallbackImages = {
  Hotel:
    "https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=800&q=80",
  "Event Venue":
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
};

function commonsFileTagToUrl(tag) {
  if (!tag || !tag.startsWith("File:")) return null;
  const filename = tag.replace("File:", "");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

/* Resolve the best image for a venue:
   1. Manually added photo in config/venuePhotos.js
   2. A photo genuinely tagged to that business in OSM
   3. Generic fallback stock image by type */
function resolveVenueImage(el, type) {
  const manualPhoto = getManualVenuePhoto(el.tags.name);
  if (manualPhoto) {
    return { image: manualPhoto, hasRealPhoto: true };
  }

  if (el.tags.image && el.tags.image.startsWith("http")) {
    return { image: el.tags.image, hasRealPhoto: true };
  }

  const taggedCommonsUrl = commonsFileTagToUrl(el.tags.wikimedia_commons);
  if (taggedCommonsUrl) {
    return { image: taggedCommonsUrl, hasRealPhoto: true };
  }

  return { image: fallbackImages[type], hasRealPhoto: false };
}

export const searchRealVenues = async (req, res) => {
  try {
    const { location } = req.query;

    if (!location) {
      return res
        .status(400)
        .json({ success: false, message: "Location is required." });
    }

    const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      location,
    )}&format=json&limit=1`;

    const geoResponse = await fetch(geoUrl, { headers: OSM_HEADERS });
    const geoData = await geoResponse.json();

    if (!geoData || geoData.length === 0) {
      return res.status(200).json({ success: true, count: 0, venues: [] });
    }

    const { lat, lon } = geoData[0];

    const overpassQuery = `
      [out:json][timeout:25];
      (
        node["tourism"="hotel"](around:15000,${lat},${lon});
        way["tourism"="hotel"](around:15000,${lat},${lon});
        node["amenity"="events_venue"](around:15000,${lat},${lon});
        way["amenity"="events_venue"](around:15000,${lat},${lon});
        node["amenity"="community_centre"](around:15000,${lat},${lon});
      );
      out center 30;
    `;

    const overpassResponse = await fetch(
      "https://overpass-api.de/api/interpreter",
      {
        method: "POST",
        headers: { ...OSM_HEADERS, "Content-Type": "text/plain" },
        body: overpassQuery,
      },
    );

    if (!overpassResponse.ok) {
      return res.status(200).json({ success: true, count: 0, venues: [] });
    }

    const overpassData = await overpassResponse.json();

    const venues = (overpassData.elements || [])
      .filter((el) => el.tags && el.tags.name)
      .slice(0, 24)
      .map((el) => {
        const isHotel = el.tags.tourism === "hotel";
        const type = isHotel ? "Hotel" : "Event Venue";
        const elLat = el.lat || el.center?.lat;
        const elLon = el.lon || el.center?.lon;

        const addressParts = [
          el.tags["addr:housenumber"],
          el.tags["addr:street"],
          el.tags["addr:city"] || location,
        ].filter(Boolean);

        const { image, hasRealPhoto } = resolveVenueImage(el, type);

        return {
          placeId: `${el.type}/${el.id}`,
          name: el.tags.name,
          address:
            addressParts.length > 0
              ? addressParts.join(", ")
              : `Near ${location}`,
          type,
          image,
          hasRealPhoto,
          lat: elLat,
          lon: elLon,
        };
      });

    res.status(200).json({ success: true, count: venues.length, venues });
  } catch (error) {
    console.log("OSM Places Search Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
