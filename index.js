const express = require("express");
const app = express();
const database = require("./config/databaseConfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const resume= require("./routes/resume.controller")

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors()); 
console.log("Entered routes")
//def route
app.use('/api/v1/resume',resume)

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})