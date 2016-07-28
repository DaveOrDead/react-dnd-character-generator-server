/**
 * GET     /alignments             ->  index
 * GET     /alignments/:id         ->  read
 */

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select * from lu_alignments';
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id];
    const query = 'select * from lu_alignments where id = $1';
    req.getOne(request, response, next, query, params);
};


module.exports = {
  index,
  read
};