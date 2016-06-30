'use strict';

var express = require('express');
var endpoints = require('./skills.endpoints');
var router = express.Router();


router.get('/', endpoints.index);

module.exports = router;