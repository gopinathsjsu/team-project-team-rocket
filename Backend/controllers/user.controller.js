const User = require('../models/users.model')
const url = require('url');

exports.signup = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty'
        });
    }

    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        state: req.body.state,
        city: req.body.city,
        zip: req.body.zip,
        dob: req.body.dob,
        passport: req.body.passport,
        miles: 0
    });

    try {
        const query = { email: user.email };
        const userExists = await User.find(query);
        if (userExists.length != 0) {
            return res.json({ success: false, message: "User already exsits. Please signup" });
        }
        const newUser = await user.save();
        if (newUser == undefined) {
            return res.json({ success: false, message: "Singup failed. Try again" });
        }
        return res.json({ success: true, message: "Singup complete! Please login" });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error occured on user signup'
        });
    }

};

exports.login = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty'
        });
    }
    const email = req.body.email;
    const password = req.body.password;
    const query = { email: email, password: password };
    try {
        const user = await User.findOne(query);
        if (user == undefined) {
            return res.json({ success: false, message: "Login failed" })
        }
        return res.json({ success: true, message: user._id })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error on login"
        });
    }
}

exports.userInfo = async (req, res) => {
    const params = url.parse(req.url, true).query;
    const customerId = params._id;
    const query = { _id: customerId }
    try {
        const data = await User.findOne(query);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Something went wrong'
        });
    }
}

exports.miles = async (req, res) => {
    const params = url.parse(req.url, true).query;
    const query = { _id: params.user_id };
    try {
        const user = await User.findOne(query, { miles: 1 });
        if (user == undefined || user.miles == undefined)
            return res.json({ success: false, message: 'Couldn\'t retrieve miles.' });
        if (user.miles == 0)
            return res.json({ success: false, message: 'No miles rewards available!' });
        return res.json({ success: true, miles: user.miles, message: 'Use ' + user.miles + ' miles points' });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error -> userMiles'
        });
    }
}