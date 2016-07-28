const express = require('express');
const endpoints = require('./abilities.endpoints');
const router = express.Router();


router.get('/', endpoints.index);

module.exports = router;