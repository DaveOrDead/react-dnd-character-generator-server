/**
 * GET     /races             ->  index
 * GET     /races/:id         ->  read
 */

'use strict';

var pg = require('pg');


// Get list of races
exports.index = function(request, response) {

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query("select id, name from lu_races", function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
};

exports.read = function(request, response) {
    var race_id = request.params.id;

    // Get all people for race
    var race_query = "select r.id, \
    	r.name, ram.ability_id,  \
    	ram.modifier, \
        ( \
        select s.name as size \
        from LU_sizes s \
        where r.size_id = s.id \
        ) \
    	from LU_races r,  \
    	race_ability_modifiers ram \
    	where r.id = ram.race_id \
    	and r.id = '" + race_id + "'";

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query( race_query, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       {
       		var res = result.rows;
       		var combine_results = res[0];

           for (var i = 0, max = res.length ; i < max; i++) {
           		combine_results[res[i].ability_id] = res[i].modifier;
           }

       	response.send(combine_results); }
    });
  });
};

