/**
 * GET     /characters             ->  index
 * GET     /characters/:id         ->  read
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query =
    `select c.id, c.name, c.avatar,
    (
        select r.name as race
        from LU_races r
        where r.id = c.race_id
    ),
    (
        select cl.name as class
        from LU_classes cl
        where cl.id = c.class_id
    ),
    (
        select l.name as level
        from LU_levels l
        where l.id = c.level_id
    )
    from characters c`;
    req.getAll(request, response, next, query);
};

const index = (request, response, next) => {

    const params = [request.params.id];

    const query = `
    select c.name, c.avatar,
    (
        select r.name as race
        from LU_races r
        where r.id = c.race_id
    ),
    (
        select cl.name as class
        from LU_classes cl
        where cl.id = c.class_id
    ),
    (
        select a.name as alignment
        from LU_alignments a
        where a.id = c.alignment_id
    ),
    (
        select l.name as level
        from LU_levels l
        where l.id = c.level_id
    )
    from characters c
    where c.id = $1`;
    req.getOne(request, response, next, query);
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
