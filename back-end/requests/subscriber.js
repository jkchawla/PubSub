
module.exports.add = function(req, res, next){
    let name = req.body.name;
    console.log(name);
    let output = {
        name: name
    }
    res.json(output)
}

module.exports.subscribe= function(req, res, next) {
    let topic = req.body.topic;
    console.log(topic);
    let output = {
        topic: topic
    }
    res.json(output)
}


