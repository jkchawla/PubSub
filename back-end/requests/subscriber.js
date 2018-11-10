module.exports.post = function(req, res, next) {
  const begin = req.body.start;
  const end = req.body.end;
  //Queries database and send result if found, query API if null and add the result to database

      res.json(output.info)

}

module.exports.get = function(req, res, next) {

}
