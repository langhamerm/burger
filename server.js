// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Open Server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
  });