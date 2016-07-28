const express = require('express');
const endpoints = require('./character_abilities.endpoints');
const router = express.Router();


router.get('/:id', endpoints.read);

module.exports = router;