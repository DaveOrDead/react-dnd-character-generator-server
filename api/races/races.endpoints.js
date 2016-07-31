/**
* GET     /races             ->  index
* GET     /races/:id         ->  read
*/

const db = require('../../connection');
const req = require('../../requests');

const index = (request, response, next) => {
    const query = `
        select id, name
        from LU_races
        where rulebook_id = 6
        order by name`;
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
        ),
        (
            select s.name as size
            from LU_sizes s
            where r.size_id = s.id
        )
        from LU_races r
        where r.id = $1`;


    const query2 = `
        select ability_id, modifier
        from race_abilities
        where race_id = $1`;

    const query3 = `
        select skill_id, ranks
        from race_skills
        where race_id = $1`;

    db.tx(t => {
            return t.batch([
                t.one(query, params),
                t.any(query2, params),
                t.any(query3, params)
            ]);
        })
        .spread((q1res, q2res, q3res) => {
            q1res.modifiers = {};
            q1res.raceSkillBonus = {};

            q2res.map((i) => {
                q1res.modifiers[i.ability_id] = i.modifier;
            })

            q3res.map((i) => {
                q1res.raceSkillBonus[i.skill_id] = i.ranks;
            })

            response.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved all',
                    data: q1res
                });
        })
        .catch(err => console.log('err: ', err));
};


module.exports = {
  index,
  read
};
