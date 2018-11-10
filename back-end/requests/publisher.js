//module.exports.post = function(req, res, next) {
//    const begin = req.body.start;
//    const end = req.body.end;
//    //Queries database and send result if found, query API if null and add the result to database
//
//    res.json(output)
//
//}

module.exports.add = function(req, res, next){
    let name = req.body.name;
    console.log(name);
    let output = {
        name: name
    }
    res.json(output)
}



module.exports.publish= function(req, res, next){
    let name = req.body.name;
    let topic = req.body.topic;
    let message = req.body.message;
    
    console.log(name);
    console.log(topic);
    console.log(message);
    let output = {
        name: name,
        topic: topic,
        message: message
    }
    res.json(output)
}

