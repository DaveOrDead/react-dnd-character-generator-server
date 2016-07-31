/**
 * GET     /classes             ->  index
 * GET     /classes/:id         ->  read
 */

const db = require('../../connection');
const req = require('../../requests');

const index = (request, response, next) => {
    const query = `
        select id, name
        from LU_classes
        order by name`;
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id, request.params.level || 1];

    const query = `
        select id, name, hit_die,
        skill_points, starting_gold
        from LU_classes
        where id = $1`;

    const query2 = `
        select skill_id
        from class_skills
        where class_id = $1`;

    const query3 = `
        select base_attack_bonus,
        fortitude_save,
        reflex_save, will_save
        from class_levels
        where class_id = $1
        and level_id = 1`;

        db.tx(t => {
            return t.batch([
                t.one(query, params),
                t.any(query2, params),
                t.one(query3, params)
            ]);
        })
        .spread((q1res, q2res, q3res) => {
            q1res.classSkills = {};

            q2res.map((i) => {
                q1res.classSkills[i.skill_id] = true;
            })

            q1res.bonuses = q3res;

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



