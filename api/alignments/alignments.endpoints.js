/**
 * GET     /alignments             ->  index
 * POST    /alignments             ->  create
 * GET     /alignments/:id         ->  read
 * PUT     /alignments/:id         ->  update
 * DELETE  /alignments/:id         ->  destroy
 */

'use strict';

var pg = require('pg');


// Get list of alignments
exports.index = function(request, response) {

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query("select * from lu_alignments", function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
};
