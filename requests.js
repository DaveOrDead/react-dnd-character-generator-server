const db = require('./connection');

/**
 * Requests
 */

const getAll = (request, response, next, query, params = []) => {

    db.any(query, params)
        .then(data => {
            response.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved all',
                    data
                });
        })
        .catch(err => next(err));
    };


const getOne = (request, response, next, query, params) => {

    db.one(query, params)
        .then(data => {
            response.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ONE',
                    data
                });
        })
        .catch(err => next(err));
    };


module.exports = {
  getAll,
  getOne
};
