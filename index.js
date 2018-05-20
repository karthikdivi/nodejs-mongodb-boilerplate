var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('port', 5000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var db = require('./db');

app.use('/users', require('./routes/users'));

app.listen(app.get('port'), function() {
  console.log('Node app started on port: ', app.get('port'));
});
