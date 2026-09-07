// import express from "express";
// import { searchRealVenues } from "../controllers/placesController.js";

// const router = express.Router();

// router.get("/search", searchRealVenues);

// export default router;


// import express from "express";
// import { searchRealVenues } from "../controllers/placesController.js";

// const router = express.Router();

// router.get("/search", searchRealVenues);

// export default router;


import express from "express";
import { searchRealVenues } from "../controllers/placesController.js";

const router = express.Router();

router.get("/search", searchRealVenues);

export default router;
