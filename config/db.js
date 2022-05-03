const mongoose = require("mongoose");
const config = require("./keys");
const db = config.mongoURI;

//Connection to the mongo DB and export module to call in server.js
const connectDB = async () =>{
	try{
		await mongoose.connect(db);
		console.log("connected to the database");
	}catch (err) {
		console.log("connection to database has failed");
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;