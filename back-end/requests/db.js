const A = require("./A.js");

module.exports.getFinal = function(req, res, next){
  A.get('final', function(err, value) {
    if(err) {
      res.json({identifier: 'final', info: []});
    } else {
      res.json(value);
    }
  });
}

module.exports.getTopics= function(req, res, next){
  A.get('topics', function(err, value) {
    if(err) {
      res.json({identifier: 'topics', info: []});
    } else {
      res.json(value);
    }
  });
}
