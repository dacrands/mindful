const mongoose   = require('mongoose'),
    passport     = require('passport'),
    ejs          = require('ejs'),
    express      = require('express'),
    bodyParser   = require('body-parser');
    app          = express(),
    seedDB       = require('./seed'),

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname +'/src'));

// MONGO
mongoose.connect('mongodb://localhost:27017/mindful');
seedDB();

// ROUTES
const indexRoutes    = require('./routes/index'),
      sessionsRoutes = require('./routes/sessions'),
      timerRoutes    = require('./routes/timer');

app.use('/', indexRoutes);
app.use('/sessions', sessionsRoutes);
app.use('/timer', timerRoutes);

// PORT
app.listen(8888, process.env.IP, function(){
    console.log('Get your mindful on...')
});