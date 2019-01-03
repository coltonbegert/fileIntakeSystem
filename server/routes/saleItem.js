var express = require('express');
var router = express.Router();

const saleItemModel = require('../models/saleItemModel')

/* GET sale item listing. */
router.get('/', function (req, res, next) {
  let resp;
  saleItemModel.find({}, (err, items) => {
    res.send(items);
  })
  // res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  const { body } = req;

  console.log(body);
  
  const saleItem = new saleItemModel(body);
  saleItem.save()
  
  res.send('ok')
})

module.exports = router; 
