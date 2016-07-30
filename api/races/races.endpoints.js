/**
* GET     /races             ->  index
* GET     /races/:id         ->  read
*/

const db = require('../../connection');
const req = require('../../requests');

const index = (request, response, next) => {
    const query = `
        select id, name
        from race
        where rulebook_id = 6`;
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id];
    const query = `
        select r.id, r.name,
        r.space, r.reach, r.combat,
        r.natural_armor, r.image,
        (
            select rsp.speed
            from race_speed rsp
            where rsp.speed_type_id = 9
            and rsp.race_id = $1
        )
        from race r
        where r.id = $1`;
        // (
        //     select s.name as size
        //     from LU_sizes s
        //     where r.size_id = s.id
        // ),

    const query2 = `
        select ability_id, modifier
        from race_abilities
        where race_id = $1`;

    db.tx(t => {
            return t.batch([
                t.one(query, params),
                t.any(query2, params)
            ]);
        })
        .spread((q1res, q2res) => {
            q1res.modifiers = [];

            q2res.map((i) => {
                q1res.modifiers.push(i.skill_id)
            })

            response.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved all',
                    data: q1res
                });
        })
        .catch(err => next(err));
};


module.exports = {
  index,
  read
};
