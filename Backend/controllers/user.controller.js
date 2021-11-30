const User = require('../models/users.model')

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
        passport: req.body.passport
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
        const user = await User.find(query);
        if (user.length == 0) {
            return res.json({ success: false, message: "Login failed" })
        }
        return res.json({ success: true, message: "jwt_token_202" })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error on login"
        });
    }
}