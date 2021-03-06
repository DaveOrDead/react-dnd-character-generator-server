/**
 * GET     /character_abilities/:id         ->  read
 */

const req = require('../../requests');

const read = (request, response, next) => {
    const params = [request.params.id];

    const query = `
        select ability_id, value
        from character_abilities
        where character_id = 2`;
    req.getAll(request, response, next, query, params);
};

module.exports = {
  read
};
