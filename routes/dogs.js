const newRegistration = require('../controller/dogs');
const express = require('express');
const router = express.Router();

const newRecord = newRegistration.postData;
router.post('/new-record', newRecord);

module.exports = router;