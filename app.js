const mongoose   = require('mongoose'),
    passport     = require('passport'),
    ejs          = require('ejs'),
    express      = require('express'),
    app          = express(),
    seedDB       = require('./seed'),
    bodyParser   = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));

// REQUIRE ROUTES
const indexRoutes    = require('./routes/index'),
      sessionsRoutes = require('./routes/sessions');


// MONGO
mongoose.connect('mongodb://localhost:27017/mindful');
seedDB();
// ROUTES
app.use('/', indexRoutes);
app.use('/sessions', sessionsRoutes);

// PORT
app.listen(8888, process.env.IP, function(){
    console.log('Get your mindful on...')
});