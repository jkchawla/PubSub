const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PubSub', {useNewUrlParser: true, useCreateIndex: true});

const schemaA = new mongoose.Schema({
  identifier: {
    type: String,
    unique: true
  },
  info: Array
});

const A = mongoose.model('A', schemaA, 'A');

module.exports.update = function(/*String*/ identifier, /*Array*/info, /*Function*/ callback) {
  A.findOneAndUpdate({identifier}, {$set:{info}}, {upsert: true, new: true}, function(err, value) {
    if(err) {
      callback(err);
    } else {
      callback(undefined, value);
    }
  });
}

//Callback(err, value);
module.exports.get = function(/*String*/ identifier, /*Function*/callback) {
  A.findOne({identifier}, function(err, value) {
    if(err) {
      callback(err);
    } else {
      if(value === null) {
        callback(new Error('Not found.'));
      } else {
        callback(undefined, value);
      }
    }
  })
}
