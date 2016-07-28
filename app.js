/**
 * Main application file
 */

const express = require('express');

// Setup server
const app = express();

// Allow access across domains (CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// create server
const server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);


// Start server on port 5000
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// Expose app
exports = module.exports = app;
