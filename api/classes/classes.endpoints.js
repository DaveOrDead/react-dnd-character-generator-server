/**
 * GET     /classes             ->  index
 * GET     /classes/:id         ->  read
 */

const db = require('../../connection');
const req = require('../../requests');

const index = (request, response, next) => {
    const query = `
        select cc.id, cc.name
        from character_class_variant ccv,
        character_class cc
        where ccv.rulebook_id = 6
        and cc.id = ccv.character_class_id
        order by name`;
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id, request.params.level || 1];

    const query = `
        select cc.id, cc.name, ccv.hit_die,
        ccv.skill_points, ccv.starting_gold
        from character_class_variant ccv,
        character_class cc
        where cc.id = ccv.character_class_id
        and ccv.rulebook_id = 6
        and cc.id = $1`;

    const query2 = `
        select cs.skill_id
        from character_class_variant_class_skills cs,
        character_class_variant ccv
        where cs.character_class_variant_id = ccv.character_class_id
        and ccv.rulebook_id = 6
        and ccv.character_class_id = $1`;

        db.tx(t => {
            return t.batch([
                t.one(query, params),
                t.any(query2, params)
            ]);
        })
        .spread((q1res, q2res) => {
            q1res.classSkills = {};

            q2res.map((i) => {
                q1res.classSkills[i.skill_id] = true;
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



