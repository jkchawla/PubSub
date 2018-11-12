const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";

function insertFinal(final) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("PubSub");
    var myobj = { identifier: "final", info: final };
    dbo.collection("A").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 Final inserted");
      db.close();
    });
  });
}


module.exports.add = function(req, res, next){
    let name = req.body.name;
    console.log(name);
    let output = {
        name: name
    }
    res.json(output)
}


module.exports.publish= function(req, res, next){
    let final = req.body
    insertFinal(final)
    res.json(final)
}
