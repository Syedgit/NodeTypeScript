

const express = require("express"),
	path = require("path"),
	app = express();
var router = require('./dist');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(new router.TRouter().getRouter);

app.listen(9001, () => console.log('Example app listening on port 9001!'));