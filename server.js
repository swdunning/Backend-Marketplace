const express = require("express");
const app = express();
const connectToDB = require("./config/db"); 
const PORT = process.env.PORT || 5001;

//Call connectToDB and connect to the mongo db
connectToDB();

//Define routes and API
app.use("/api/users", require("./routes/userApi"));
app.use("/api/products", require("./routes/productsApi"));


app.get("/", (req, res)=> {
	res.send("My app is up");
});

app.listen(PORT, ()=> {
	console.log(`Server is listening at port ${PORT}`);
});

