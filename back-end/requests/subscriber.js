
module.exports.add= function(req, res, next) {
    let name = req.body.name;
    console.log(name);
    let output = {
        name: name
    }
    res.json(output)
}


