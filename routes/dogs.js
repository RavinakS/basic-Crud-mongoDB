const dogsInfo = require('../controller/dogs');
const express = require('express');
const router = express.Router();

const newRecord = dogsInfo.postData;
router.post('/new-record', newRecord);

const allInfo = dogsInfo.getData;
router.get('/all-data', allInfo);

const updateInfoById = dogsInfo.dataUpdateById;
router.put('/update/:id', updateInfoById);

module.exports = router;