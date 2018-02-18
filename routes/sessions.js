const express = require('express'),
      router  = express.Router(),
      Session = require('../models/session');


router.get('/', function(req, res){
    Session.find({}, function(err, allSessions){
        if (err) {
            console.log(err);
        } else {
            res.render('sessions/index', {sessions: allSessions});
        }
    });
});


// CREATE
router.post('/', function(req, res){
    let name       = req.body.name,
        time       = req.body.time,
        note       = req.body.note,           
        newSession = {name:name, time:time, note:note};

    Session.create(newSession, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            res.redirect('/sessions');
        }
    });
});


// NEW
router.get('/new', function(req, res){
    res.render('sessions/new');
});

// SHOW
router.get('/:id', function(req, res){
    Session.findById(req.params.id).exec(function(err, foundSession){
        if (err) {
            console.log(err);
        } else {
            res.render('sessions/show', {session: foundSession});
        }
    });
});


module.exports = router;