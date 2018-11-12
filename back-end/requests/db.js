const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";

function query(data, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("PubSub");
    var query = { identifier: data };
    dbo.collection("A").findOne(query, function(err, result) {
      if (err) throw err;
      callback(result);
      db.close();
    });
  });
}


module.exports.getFinal = function(req, res, next){
    query("final", function(output) {
      res.json(output)
    })
}



module.exports.getTopics= function(req, res, next){
  query("topics", function(output) {
    res.json(output)
  })
}
