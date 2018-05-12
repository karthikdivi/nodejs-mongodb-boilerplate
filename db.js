const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

var db = null;

MongoClient.connect(url, function(err, client) {
  if(err){
    console.log(err);
  }else{
    console.log("Connected successfully to mongodb");
    db = client.db('test-db');
  }
});

module.exports = db;
