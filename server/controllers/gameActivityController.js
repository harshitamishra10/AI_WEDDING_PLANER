import GameActivity from "../models/gameActivity.js";

/* ------------------------------------------------------------------ */
/* Browse / filter the games catalog                                   */
/* ------------------------------------------------------------------ */
export const getGames = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = {};
    if (category && category !== "All") {
      filter.category = category;
    }

    const games = await GameActivity.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: games.length,
      games,
    });
  } catch (error) {
    console.log("Get Games Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Toggle select / unselect a game for the logged-in client's wedding  */
/* ------------------------------------------------------------------ */
export const toggleSelectGame = async (req, res) => {
  try {
    const game = await GameActivity.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ success: false, message: "Game not found" });
    }

    const userId = req.user.id;
    const alreadySelected = game.selectedBy.some(
      (id) => id.toString() === userId
    );

    if (alreadySelected) {
      game.selectedBy = game.selectedBy.filter(
        (id) => id.toString() !== userId
      );
    } else {
      game.selectedBy.push(userId);
    }

    await game.save();

    res.status(200).json({
      success: true,
      selected: !alreadySelected,
      game,
    });
  } catch (error) {
    console.log("Toggle Select Game Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Add a custom game/activity suggestion                               */
/* ------------------------------------------------------------------ */
export const createCustomGame = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      groupMin,
      groupMax,
      durationMinutes,
      propsNeeded,
      energyLevel,
    } = req.body;

    if (!title || !category || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, category and description are required.",
      });
    }

    const parsedProps =
      typeof propsNeeded === "string"
        ? propsNeeded.split(",").map((p) => p.trim()).filter(Boolean)
        : Array.isArray(propsNeeded)
        ? propsNeeded
        : [];

    const game = await GameActivity.create({
      title,
      category,
      description,
      groupSize: {
        min: groupMin || 2,
        max: groupMax || 50,
      },
      durationMinutes: durationMinutes || 15,
      propsNeeded: parsedProps,
      energyLevel: energyLevel || "Medium",
      createdBy: req.user.id,
      isCustom: true,
    });

    res.status(201).json({
      success: true,
      message: "Your game idea has been added to the catalog!",
      game,
    });
  } catch (error) {
    console.log("Create Custom Game Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Get games selected by the logged-in user                            */
/* ------------------------------------------------------------------ */
export const getMySelections = async (req, res) => {
  try {
    const games = await GameActivity.find({ selectedBy: req.user.id });

    res.status(200).json({
      success: true,
      count: games.length,
      games,
    });
  } catch (error) {
    console.log("Get My Selections Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
