const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const MongoClient = require('mongodb').MongoClient;

// const url = "mongodb://localhost:27017/PubSub";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   // var dbo = db.db("PubSub");
//   // var initialFinal = {
//   //     'sub_topics1': [],
//   //     'sub_topics2': [],
//   //     'sub_topics3': []
//   // }
//   // var myobj = { identifier: "final", info: "initial" };
//   // dbo.collection("A").insertOne(myobj, function(err, res) {
//   //   if (err) throw err;
//   //   console.log("Initial Final inserted");
//   //   db.close();
//   // });
//   db.close();
// });

//Request imports.
const publisher = require('./requests/publisher.js');
const subscriber = require('./requests/subscriber.js');
const db = require('./requests/db.js');

//Setup
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Listeners
app.post('/publisher/add', publisher.add)
app.post('/publisher/publish', publisher.publish)
app.get('/getFinal', db.getFinal)
app.get('/getTopics', db.getTopics)

app.post('/subscriber/subscribe', subscriber.subscribe)

app.listen(8000, function() {console.log('Running on port 8000.')});
