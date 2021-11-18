const router = require("express").Router();
const flightsController = require("../controllers/flight.controller.js");
const user = require('../controllers/user.controller');

router.post('/user/register', user.register);
router.post('/user/login', user.login);

router.post("/flights", flightsController.create);
router.get("/flights", flightsController.findByLocations);

module.exports = router;