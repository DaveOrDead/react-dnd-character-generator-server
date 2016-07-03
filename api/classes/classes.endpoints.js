/**
 * GET     /classes             ->  index
 * GET     /classes/:id         ->  read
 */

'use strict';

var pg = require('pg');

// Get list of classes
exports.index = function(request, response) {

    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query("select id, name from lu_classes", function(err, result) {
            done();
            if (err){
                console.error(err); response.send("Error " + err);
            } else {
                response.send(result.rows);
            }
        });
    });
};


exports.read = function(request, response) {
    var class_id = request.params.id;
    var level_id = request.params.level || 'lvl1';

    // Get all people for class
    var class_query = "select r.id, r.name, r.hit_die, r.initial_skill_modifier, r.level_skill_modifier, \
    cl.base_attack_bonus, cl.fortitude_save, cl.reflex_save, cl.will_save \
        from LU_classes r, LU_class_levels cl \
        where r.id = '" + class_id + "' \
        and cl.class_id = '" + class_id + "' \
        and cl.level_id = '" + level_id + "'";

    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query(class_query, function(err, result1) {
            done();
            if (err) {
                console.error(err); response.send("Error " + err);
            } else {
                var classSkillQuery = " \
                    select cs.skill_id from LU_class_skills cs \
                    where cs.class_id ='" + class_id + "'";

                client.query(classSkillQuery, function(err, result2) {
                    done();
                    if (err) {
                        console.error(err); response.send("Error " + err);
                    } else {
                        result1.rows[0].classSkills = {};
                        for (var i = 0, max = result2.rows.length; i < max; i++) {
                            result1.rows[0].classSkills[result2.rows[i].skill_id] = true;
                        }

                        response.send(result1.rows);
                    }
                });
            }
        });
    });
};
