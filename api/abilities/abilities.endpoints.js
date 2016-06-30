/**
 * GET     /abilities             ->  index
 * GET     /abilities/:id         ->  read
 */

'use strict';

var pg = require('pg');


// Get list of abilities
exports.index = function(request, response) {

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query("select * from lu_abilities", function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
};

