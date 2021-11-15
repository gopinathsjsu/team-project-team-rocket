const router = require("express").Router();
const flightsController = require("../controllers/flight.controller.js");

router.post("/flights", flightsController.create);
router.get("/flights", flightsController.findByLocations);

module.exports = router;