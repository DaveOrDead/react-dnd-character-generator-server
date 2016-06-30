/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

  //  Main api routes
  app.use('/api/alignments', require('./api/alignments'));
  app.use('/api/races', require('./api/races'));
  app.use('/api/abilities', require('./api/abilities'));
};
