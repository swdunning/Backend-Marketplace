const express = require("express");
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
})
app.get('/', function(req, res) {
	res.status(200)
		.send("Hello World");
});

app.get('/test', (req, res)=> {
	res.json({ msg: "We are getting better" });
});


app.listen(PORT, ()=> {
	console.log(`Server is listening on port ${PORT}`);
});

