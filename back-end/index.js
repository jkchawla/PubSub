const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

// const url = "mongodb://localhost:27017/weatherRoute";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

//Request imports.
const publisher = require('./requests/publisher.js');
const subscriber = require('./requests/subscriber.js');

//Setup
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Listeners
app.post('/publisher/add', publisher.add)
app.post('/publisher/publish', publisher.publish)

app.post('/subscriber/add', subscriber.subscribe)
app.post('/subscriber/subscribe', subscriber.subscribe)

app.listen(8000, function() {console.log('Running on port 8000.')});
