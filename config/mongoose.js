const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
// connect from mongodb
//mongoose.connect('mongodb://localhost:27017/Review-System');
mongoose.connect('mongodb://127.0.0.1:27017/employeedata',{useNewUrlParser:true});


// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;