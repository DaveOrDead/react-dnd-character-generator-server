/**
 * GET     /characters             ->  index
 * GET     /characters/:id         ->  read
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query =
    `select ch.id, ch.name, ch.avatar,
    (
        select r.name as race
        from LU_races r
        where r.id = ch.race_id
    ),
    (
        select c.name
        from LU_classes c
        where c.id = ch.class_id
    ),
    (
        select l.name as level
        from LU_levels l
        where l.id = ch.level_id
    )
    from characters ch`;
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {

    const params = [request.params.id];

    const query = `
    select ch.name, ch.avatar,
    (
        select r.name as race
        from LU_races r
        where r.id = ch.race_id
    ),
    (
        select c.name
        from LU_classes c
        where c.id = ch.class_id
    ),
    (
        select a.name as alignment
        from LU_alignments a
        where a.id = ch.alignment_id
    ),
    (
        select l.name as level
        from LU_levels l
        where l.id = ch.level_id
    )
    from characters ch
    where ch.id = $1`;
    req.getOne(request, response, next, query, params);
};


module.exports = {
  index,
  read
};

// Get all details for character
// var abilitiesQuery = `select ability_id, value
// from character_abilities
// where character_id = '` + character_id + `'`;

// client.query(abilitiesQuery, function(err, result2) {
//     done();
//     if (err) {
//         console.error(err); response.send(`Error ` + err);
//     } else {
//         result1.rows[0].abilities = {};
//         for (var i = 0, max = result2.rows.length; i < max; i++) {
//             result1.rows[0].modifiers[result2.rows[i].ability_id] = result2.rows[i].modifier;
//         }

//         response.send(result1.rows);
