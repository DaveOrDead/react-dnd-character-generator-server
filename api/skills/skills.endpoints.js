/**
 * GET     /skills             ->  index
 * GET     /skills/:id         ->  read
 */

'use strict';

var pg = require('pg');


// Get list of skills
exports.index = function(request, response) {

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query("select id, name from lu_skills", function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
};

