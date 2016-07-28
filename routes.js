/**
 * Main application routes
 */

module.exports = app => {

  //  Main api routes
    app.use('/api/abilities', require('./api/abilities'));
    app.use('/api/alignments', require('./api/alignments'));
    app.use('/api/races', require('./api/races'));

  // app.use('/api/classes', require('./api/classes'));
    app.use('/api/skills', require('./api/skills'));
  // app.use('/api/characters', require('./api/characters'));
  // app.use('/api/character_abilities', require('./api/character_abilities'));

};
