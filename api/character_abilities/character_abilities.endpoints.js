/**
 * GET     /abilities             ->  index
 * GET     /abilities/:id         ->  read
 */

'use strict';

var pg = require('pg');


// Get ability scores for character
exports.read = function(request, response) {

    var character_id = request.params.id;

    // Get all details for character
    var getCharacterAbilitiesQuery = "select ability_id, value \
    from character_abilities \
    where character_id = '" + character_id + "'";

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(getCharacterAbilitiesQuery, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
};

