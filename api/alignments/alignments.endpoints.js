/**
 * GET     /alignments             ->  index
 * GET     /alignments/:id         ->  read
 */

const db = require('../../connection');

const index = (req, res, next) => {

    db.any("select * from lu_alignments")
        .then(data => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved all alignments',
                    data
                });
        })
        .catch(err => next(err));
    };


const read = (req, res, next) => {

    const alignmentId = req.params.id;

    db.one('select * from lu_alignments where id = $1', alignmentId)
        .then(data => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ONE alignment',
                    data
                });
        })
        .catch(err => next(err));
    };


module.exports = {
  index,
  read
};