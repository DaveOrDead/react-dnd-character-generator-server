'use strict';

var express = require('express');
var endpoints = require('./characters.endpoints');
var router = express.Router();


router.get('/', endpoints.index);

module.exports = router;