import TimelineEvent from "../models/timelineEvent.js";

/* ------------------------------------------------------------------ */
/* Auto-generate a default wedding schedule around the wedding date    */
/* ------------------------------------------------------------------ */
export const generateTimeline = async (req, res) => {
  try {
    const { weddingDate, functions } = req.body;

    if (!weddingDate) {
      return res.status(400).json({ success: false, message: "Wedding date is required." });
    }

    const selectedFunctions =
      Array.isArray(functions) && functions.length > 0
        ? functions
        : ["Haldi", "Mehendi", "Sangeet", "Wedding Ceremony", "Reception"];

    const mainDate = new Date(weddingDate);

    const addDays = (date, days) => {
      const d = new Date(date);
      d.setDate(d.getDate() + days);
      return d;
    };

    const blueprint = {
      Engagement: { offsetDays: -30, time: "6:00 PM", title: "Engagement Ceremony" },
      Haldi: { offsetDays: -2, time: "10:00 AM", title: "Haldi Ceremony" },
      Mehendi: { offsetDays: -1, time: "4:00 PM", title: "Mehendi Ceremony" },
      Sangeet: { offsetDays: -1, time: "7:00 PM", title: "Sangeet Night" },
      "Wedding Ceremony": { offsetDays: 0, time: "11:00 AM", title: "Wedding Ceremony" },
      Reception: { offsetDays: 0, time: "7:00 PM", title: "Reception" },
    };

    // Remove previously auto-generated events, keep any custom ones the user added
    await TimelineEvent.deleteMany({ owner: req.user.id, isGenerated: true });

    const newEvents = selectedFunctions
      .filter((f) => blueprint[f])
      .map((f) => ({
        owner: req.user.id,
        title: blueprint[f].title,
        eventType: f,
        date: addDays(mainDate, blueprint[f].offsetDays),
        time: blueprint[f].time,
        isGenerated: true,
      }));

    const created = await TimelineEvent.insertMany(newEvents);

    const allEvents = await TimelineEvent.find({ owner: req.user.id }).sort({ date: 1 });

    res.status(201).json({
      success: true,
      message: "Your wedding timeline has been generated!",
      generatedCount: created.length,
      events: allEvents,
    });
  } catch (error) {
    console.log("Generate Timeline Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Get all events for the logged-in user, sorted chronologically       */
/* ------------------------------------------------------------------ */
export const getMyTimeline = async (req, res) => {
  try {
    const events = await TimelineEvent.find({ owner: req.user.id }).sort({ date: 1 });
    res.status(200).json({ success: true, events });
  } catch (error) {
    console.log("Get Timeline Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Add a custom event                                                  */
/* ------------------------------------------------------------------ */
export const createEvent = async (req, res) => {
  try {
    const { title, eventType, date, time, location, notes } = req.body;

    if (!title || !date) {
      return res.status(400).json({ success: false, message: "Title and date are required." });
    }

    const event = await TimelineEvent.create({
      owner: req.user.id,
      title,
      eventType: eventType || "Custom",
      date,
      time,
      location,
      notes,
      isGenerated: false,
    });

    res.status(201).json({ success: true, event });
  } catch (error) {
    console.log("Create Event Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Update an event                                                     */
/* ------------------------------------------------------------------ */
export const updateEvent = async (req, res) => {
  try {
    const event = await TimelineEvent.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    if (event.owner.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    const allowedFields = ["title", "eventType", "date", "time", "location", "notes"];
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        event[field] = req.body[field];
      }
    });

    await event.save();

    res.status(200).json({ success: true, event });
  } catch (error) {
    console.log("Update Event Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Delete an event                                                     */
/* ------------------------------------------------------------------ */
export const deleteEvent = async (req, res) => {
  try {
    const event = await TimelineEvent.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    if (event.owner.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    await event.deleteOne();

    res.status(200).json({ success: true, message: "Event removed" });
  } catch (error) {
    console.log("Delete Event Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
