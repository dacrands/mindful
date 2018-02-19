var express = require('express'),
    router  = express.Router(),
    Session = require('../models/session');



// INDEX ROUTE
router.get('/', function(req, res){
    res.render('landing');
});

// CHART
router.get('/chart', function(req, res){
    Session.find({}, function(err, allSessions){
        if (err) {
            console.log(err);
        } else {
            res.render('chart/index', {sessions: allSessions});
        }
    });
});


module.exports = router;