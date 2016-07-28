/**
 * GET     /abilities             ->  index
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select * from lu_abilities';
    req.getAll(request, response, next, query);
};

module.exports = {
  index
};