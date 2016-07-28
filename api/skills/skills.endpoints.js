/**
 * GET     /skills             ->  index
 * GET     /skills/:id         ->  read
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select id, name, ability_id from lu_skills';
    req.getAll(request, response, next, query);
};

module.exports = {
  index
};

