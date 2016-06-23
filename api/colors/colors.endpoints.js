/**
 * GET     /colors             ->  index
 * POST    /colors             ->  create
 * GET     /colors/:id         ->  read
 * PUT     /colors/:id         ->  update
 * DELETE  /colors/:id         ->  destroy
 */

'use strict';

var _ = require('lodash');
var pg = require('pg');


// Get list of colors
exports.index = function(request, response) {

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query("select * from lu_colors", function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
};

