var mongoose = require('mongoose'),
     Session = require('./models/session');

var data = [
    {
        name: 'David C',
        time: Date()
    },
    {
        name: 'Opie Hughes',
        time: Date()
    },
    {
        name: 'Rich Vos',
        time: Date()
    }
]

function seedDB() {
    Session.remove({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log('Removed sessions');

        // Add seed
        data.forEach(function(seed){
            if (err) {
                console.log('error');
            } else {
                Session.create(seed, function(err, session){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Session created');
                    }
                })
            }
        })
    });
}

module.exports = seedDB;