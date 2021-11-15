const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
// const passport = require('passport');
const mongoose = require('mongoose')
const db = require('./config/db.config')
const server = require('./config/server.config')

mongoose.connect(db.url);

//On connection
mongoose.connection.on('connected', function () {
	console.log('connected to ' + db.url);
});

//On error
mongoose.connection.on('error', function () {
	console.log('error');
});

const app = express();

// const users = require('./routes/users');
// const employees = require('./routes/employees');
const flights = require('./routes/flight.route');

const port = 3000;

//cors MW
app.use(cors());

//Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

//Body parser MW
app.use(bodyParser.json());

//Passport MW
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

// app.use('/users', users);
// app.use('/employees', employees);
app.use('/flights', flights);

app.get('/', function (req, res) {
	res.send('invalid');
});

app.get('*', function (req, res) {
	//  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(server.port, server.host, function () {
	console.log('Server started on port ' + port);
});
