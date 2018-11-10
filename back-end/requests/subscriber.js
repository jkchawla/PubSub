
module.exports.subscribe= function(req, res, next) {
    let topic = req.body.topic;
    console.log(topic);
    let output = {
        topic: topic
    }
    res.json(output)
}


