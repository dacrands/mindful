var express = require('express'),
     router = express.Router();

router.get('/', function(req, res){
    res.render('sessions/index');
});

module.exports = router;