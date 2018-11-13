const A = require("./A.js");

module.exports.add = function(req, res, next){
    let name = req.body.name;
    let output = {
        name: name
    }
    res.json(output);
}

module.exports.publish= function(req, res, next){
    let info = req.body;
    A.update('final', info, function(err, value) {
      if(err) {
        res.json({success: false});
      } else {
        res.json(info);
      }
    });
}
