/**
 * GET     /classes             ->  index
 * GET     /classes/:id         ->  read
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select id, name from character_classes limit 11';
    // TODO: clean this up and do by rule set rather than 11.
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id, request.params.level || 'lvl1'];
    // const query = `
    //     select c.id, c.name, c.hit_die,
    //     c.initial_skill_modifier, r.level_skill_modifier,
    //     cl.base_attack_bonus, cl.fortitude_save,
    //     cl.reflex_save, cl.will_save
    //     from LU_classes r, LU_class_levels cl
    //     where r.id = $1
    //     and cl.class_id = $1
    //     and cl.level_id = $2`;
    //
    const query = `
        select cc.id, cc.name, ccv.hit_die,
        ccv.skill_points, ccv.starting_gold
        from character_class_variant ccv, character_class cc
        where ccv.rulebook_id = 6
        where ccv.character_class_id = $1
        and ccv.character_class_id = $1`;

    req.getOne(request, response, next, query, params);
};

module.exports = {
  index,
  read
};

// var classSkillQuery = " \
//     select cs.skill_id from LU_class_skills cs \
//     where cs.class_id ='" + class_id + "'";


