const A = require("./A.js");

module.exports.subscribe= function(req, res, next) {
    let topic = req.body.topic;
    let allTopics =req.body.allTopics;
    let click = req.body.click;
    let output = {
        topic: topic,
        allTopics: allTopics,
        click : click
    };
    A.update('topics', allTopics.sub_topics1, function(err, value) {
      if(err) {
        res.json({success: false});
      } else {
        res.json(output);
      }
    });
}
