var express = require('express');
var router = express.Router();
 var MerchantData = require('../model/dashboardModel/dashboardmodel');
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/performance/score', function(req, res, next) {	
  if(req.query.company_id > 0 ) {
     	MerchantData.getPerformanceScore(req.query.company_id,function(err,rows){ 
          if(err) {
  			res.json(err);
  		  } else {
  			res.json(rows);
  		  }
        });
      }	 else {
         res.send('Invalid parameter');
      }
});
router.get('/merchant/info', function(req, res, next) {	
  if(req.query.company_id > 0 ) {
     	MerchantData.getMerchantDetails(req.query.company_id,function(err,rows){ 
          if(err) {
  			res.json(err);
  		  } else {
  			res.json(rows);
  		  }
        });
      }	 else {
         res.send('Invalid parameter');
      }
});
router.get('/performance/return', function(req, res, next) {	
  if(req.query.company_id > 0 ) {
     	MerchantData.getMechantReturn(req.query.company_id,function(err,rows){ 
          if(err) {
  			res.json(err);
  		  } else {
  			res.json(rows);
  		  }
        });
      }	 else {
         res.send('Invalid parameter');
      }
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
