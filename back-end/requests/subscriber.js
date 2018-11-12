const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";

function insertTopics(topics) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("PubSub");
    console.log("TOPICS DB " + topics)
    var myobj = { identifier: "topics", info: topics };
    dbo.collection("A").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 Topic inserted");
      db.close();
    });
  });
}

module.exports.subscribe= function(req, res, next) {
    let topic = req.body.topic;
    let allTopics =req.body.allTopics;
    let click = req.body.click;
    console.log("ALL TOPICS " + JSON.stringify(allTopics.sub_topics1))
    insertTopics(allTopics.sub_topics1)
    let output = {
        topic: topic,
        allTopics: allTopics,
        click : click
    };
    console.log("OUTPUT JSON " + output)
    res.json(output)
}
