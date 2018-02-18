const mongoose = require('mongoose'),
     Session = require('./models/session');

const data = [
    {
        name: 'David C',
        time: '20',
        date: Date().slice(0, 21),
        note: 'Bacon ipsum dolor amet swine short ribs jowl boudin kielbasa ball tip frankfurter alcatra ham hock. Biltong turducken capicola picanha boudin. Porchetta short ribs burgdoggen meatloaf ball tip prosciutto brisket, t-bone cupim. Biltong pastrami jowl tri-tip shank ribeye drumstick andouille cupim cow filet mignon shoulder.'
    },
    {
        name: 'Opie Hughes',
        time: '30',
        date: Date().slice(0, 21),        
        note: 'andjaeger, jowl corned beef sausage short ribs andouille. Alcatra sausage fatback, ham hamburger corned beef doner kielbasa sirloin biltong beef ribs meatball. Kielbasa pork chop venison, beef ribs prosciutto ball tip tenderloin biltong.'
    },
    {
        name: 'Anthony Cumia',
        time: '46',
        date: Date().slice(0, 21),        
        note: 'andjaeger, jowl corned beef sausage short ribs andouille. Alcatra sausage fatback, ham hamburger corned beef doner kielbasa sirloin biltong beef ribs meatball. Kielbasa pork chop venison, beef ribs prosciutto ball tip tenderloin biltong.'
    },
    {
        name: 'Ralphy May',
        time: '30',
        date: Date().slice(0, 21),
        note: 'andjaeger, jowl corned beef sausage short ribs andouille. Alcatra sausage fatback, ham hamburger corned beef doner kielbasa sirloin biltong beef ribs meatball. Kielbasa pork chop venison, beef ribs prosciutto ball tip tenderloin biltong.'
    },
    {
        name: 'Ted Schekler',
        time: '30',
        date: Date().slice(0, 21),
        note: 'andjaeger, jowl corned beef sausage short ribs andouille. Alcatra sausage fatback, ham hamburger corned beef doner kielbasa sirloin biltong beef ribs meatball. Kielbasa pork chop venison, beef ribs prosciutto ball tip tenderloin biltong.'
    },
    {
        name: 'Opie Hughes',
        time: '17',
        date: Date().slice(0, 21),
        note: 'andjaeger, jowl corned beef sausage short ribs andouille. Alcatra sausage fatback, ham hamburger corned beef doner kielbasa sirloin biltong beef ribs meatball. Kielbasa pork chop venison, beef ribs prosciutto ball tip tenderloin biltong.'
    },
    {
        name: 'Rich Vos',
        time: '22',
        date: Date().slice(0, 21),
        note: 'Brisket ham hock andouille, sausage tenderloin capicola kielbasa pig ground round short ribs pork chop prosciutto doner pastrami. Spare ribs pig beef, capicola prosciutto sausage ball tip turducken. Bresaola ham pork loin sausage rump cow doner landjaeger shoulder turducken prosciutto shankle. Pork belly turkey short loin landjaeger drumstick t-bone, buffalo tenderloin salami jerky swine shoulder cow. Swine pork chop pancetta brisket venison fatback bresaola.'
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