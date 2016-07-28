/**
* GET     /races             ->  index
* GET     /races/:id         ->  read
*/

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select id, name from lu_races';
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id];
    const query = `select r.id, r.name,
        (
            select s.name as size
            from LU_sizes s
            where r.size_id = s.id
        )
        from LU_races r
        where r.id = $1`;

    req.getOne(request, response, next, query, params);
};


module.exports = {
  index,
  read
};

//                 var modifierQuery = " \
//                     select ram.ability_id, ram.modifier \
//                     from race_ability_modifiers ram \
//                     where ram.race_id ='" + race_id + "'";

//                 client.query(modifierQuery, function(err, result2) {
//                     done();
//                     if (err) {
//                         console.error(err); response.send("Error " + err);
//                     } else {
//                         result1.rows[0].modifiers = {};
//                         for (var i = 0, max = result2.rows.length; i < max; i++) {
//                             result1.rows[0].modifiers[result2.rows[i].ability_id] = result2.rows[i].modifier;
//                         }

//                         response.send(result1.rows);
//                     }


