/**
 * Express configuration
 */

'use strict';

var express = require('express');

// needed to extract data from request.body in the endpoints
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
};
