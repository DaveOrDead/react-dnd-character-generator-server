/**
* GET     /races             ->  index
* GET     /races/:id         ->  read
*/

const req = require('../../requests');

const index = (request, response, next) => {
    const query = 'select id, name from race where rulebook_id = 6';
    req.getAll(request, response, next, query);
};

const read = (request, response, next) => {
    const params = [request.params.id];
    const query = `
        select r.id, r.name, r.str, r.dex,
        r.con, r.int, r.wis, r.cha, r.level_adjustment,
        r.space, r.reach, r.combat, r.natural_armor, r.image,
        r.racial_hit_dice_count,
        (
            select rs.name as size
            from race_size rs
            where r.size_id = rs.id
        )
        from race r
        where r.id = $1`;

    req.getOne(request, response, next, query, params);
};


module.exports = {
  index,
  read
};
