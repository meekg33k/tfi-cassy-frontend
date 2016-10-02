var express = require('express');
var router = express.Router();
var apiManager = require('../services/api-manager');

// GET all form field names
router.get('/', (req, res, next) => {
  apiManager.getAllFormFieldNames((err, result) => {
    if (err) {
      console.error(`Error getting form fields ${err}`);
    }
    
    res.status(200).send(result);
  });
});



// GET a field name by id
router.get('/:fieldnameid', (req, res, next) => {
  apiManager.getFormFieldNamebyId(req.params.fieldnameid, (err, result) => {
    if (err) {
      console.error(`Error getting form field id ${req.params.fieldnameid}, Error ${err}`);
    }
    
    res.status(200).send(result);
  });
});

module.exports = router;