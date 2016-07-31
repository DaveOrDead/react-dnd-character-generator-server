/**
 * GET     /skills             ->  index
 * GET     /skills/:id         ->  read
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query = `
        select id, name
        from LU_feats
        where rulebook_id = 6
        order by name`;
    req.getAll(request, response, next, query);
};

module.exports = {
  index
};

