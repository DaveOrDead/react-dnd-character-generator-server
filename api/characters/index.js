const express = require('express');
const endpoints = require('./characters.endpoints');
const router = express.Router();


router.get('/', endpoints.index);
router.get('/:id', endpoints.read);

module.exports = router;