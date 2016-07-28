/**
 * GET     /classes             ->  index
 * GET     /classes/:id         ->  read
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select id, name from lu_classes';
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id, request.params.level || 'lvl1'];
    const query = `
        select r.id, r.name, r.hit_die,
        r.initial_skill_modifier, r.level_skill_modifier,
        cl.base_attack_bonus, cl.fortitude_save,
        cl.reflex_save, cl.will_save
        from LU_classes r, LU_class_levels cl
        where r.id = $1
        and cl.class_id = $1
        and cl.level_id = $2`;

    req.getOne(request, response, next, query, params);
};

module.exports = {
  index,
  read
};

// var classSkillQuery = " \
//     select cs.skill_id from LU_class_skills cs \
//     where cs.class_id ='" + class_id + "'";


