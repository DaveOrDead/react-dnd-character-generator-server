'use strict';

var express = require('express');
var endpoints = require('./classes.endpoints');
var router = express.Router();


router.get('/', endpoints.index);

module.exports = router;