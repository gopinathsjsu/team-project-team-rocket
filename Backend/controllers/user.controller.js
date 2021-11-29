const User = require('../models/users.model')
const url = require('url');

exports.register = async (req, res) => {
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

    console.log("Printing user",user);

    try {
        const data = await user.save();
        res.send(data);
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
    const query = { email: email, password: password }
    try {
        const user = await User.find(query);
        console.log("printing user=",user);
        if (user.length==0) {
            return res.status(400).send({ success: false, message: "Login failed" })
        }
        return res.json({ success: true, message: "jwt_token_202" })
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
    const query = { _id: customerId}
    try{
        const data = await User.findOne(query);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Something went wrong'
        });
    }
}