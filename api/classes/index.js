'use strict';

var express = require('express');
var endpoints = require('./classes.endpoints');
var router = express.Router();


router.get('/', endpoints.index);
router.get('/:id', endpoints.read);

module.exports = router;