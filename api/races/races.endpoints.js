/**
* GET     /races             ->  index
* GET     /races/:id         ->  read
*/

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select id, name from race where rulebook_id = 6';
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id];
    const query = `select r.id, r.name,
        (
            select rs.name as size
            from race_size rs
            where r.size_id = rs.id
        )
        from race r
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


