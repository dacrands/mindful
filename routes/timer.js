const express = require('express'),
      router  = express.Router();

router.get('/', function(req, res){
    res.render('timer/index');
});

module.exports = router;