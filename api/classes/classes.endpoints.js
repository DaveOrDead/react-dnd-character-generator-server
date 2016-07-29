/**
 * GET     /classes             ->  index
 * GET     /classes/:id         ->  read
 */

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
    const params = [request.params.id, request.params.level || 'lvl1'];

    const query = `
        select cc.id, cc.name, ccv.hit_die,
        ccv.skill_points, ccv.starting_gold
        from character_class_variant ccv,
        character_class cc
        where cc.id = ccv.character_class_id
        and ccv.rulebook_id = 6
        and cc.id = $1`;

    req.getOne(request, response, next, query, params);
};

module.exports = {
  index,
  read
};

// var classSkillQuery = " \
//     select cs.skill_id from LU_class_skills cs \
//     where cs.class_id ='" + class_id + "'";


