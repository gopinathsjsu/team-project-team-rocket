const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./app/routes");
const dbConfig = require("./app/config/db.config.js");

var corsOptions = {
	origin: "http://localhost:8081"
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
	res.json({message: "Welcome to the application!"});
});
app.use("/", routes);


// set port, listen for requests
const PORT = process.env.PORT || 8080;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

mongoose.Promise = global.Promise;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
