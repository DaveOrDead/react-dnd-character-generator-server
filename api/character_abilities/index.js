'use strict';

var express = require('express');
var endpoints = require('./character_abilities.endpoints');
var router = express.Router();



router.get('/:id', endpoints.read);

module.exports = router;