

const express = require("express"),
	path = require("path"),
	app = express();
var router = require('./dist');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(new router.TRouter().getRouter);
const mongoUrl = "mongodb+srv://dbAftab:Aftabmongod786@cluster0.k3zy2.mongodb.net/test";
const mongoose = require('mongoose')
mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true, dbName: 'Job_Seeker'})
  .then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));
app.listen(9001, () => console.log('Example app listening on port 9001!'));