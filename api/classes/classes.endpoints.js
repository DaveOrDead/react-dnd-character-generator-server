/**
 * GET     /classes             ->  index
 * GET     /classes/:id         ->  read
 */

'use strict';

var pg = require('pg');


// Get list of classes
exports.index = function(request, response) {

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query("select id, name from lu_classes", function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
};

