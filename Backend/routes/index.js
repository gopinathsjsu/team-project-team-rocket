const router = require("express").Router();
const flight = require("../controllers/flight.controller");
const user = require("../controllers/user.controller");
const booking = require("../controllers/booking.controller");

router.post("/user/signup", user.signup);
router.post("/user/login", user.login);
router.get("/user/profile", user.profile);
router.get("/user/miles", user.miles);

router.get("/flights/planets", flight.planets);
router.post("/flights", flight.create);
router.get("/flights", flight.findByLocations);
router.get("/flights/seats", flight.getSeatMap);
router.get("/flights/id", flight.findById);

router.post("/booking", booking.create);
router.put("/booking/update/seat", booking.updateSeat);
router.put("/booking/update/reschedule", booking.reschedule);
router.delete("/booking", booking.cancel);

router.get("/user/booking", booking.getBookingByUser);
router.get("/booking/flight", booking.getBookingByFlight);

module.exports = router;
