const express = require('express');
const router = express.Router();
const User = require('../models/users.model')
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Register
// router.post('/register', function (req, res, next) {

// });

//Authenticate
router.post('/authenticate', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, function (err, user) {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.json({ success: false, msg: "You haven't registered" });
    }

    User.comparePassword(password, user.password, function (err, isMatch) {
      if (err) {
        throw err;
      }
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 //1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            user_id: user._id,
            username: user.username,
          }
        });
      }
      else {
        return res.json({ success: false, msg: "That's the wrong password" });
      }
    });
  });
});

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  res.json({ user: req.user });
});

module.exports = router;
