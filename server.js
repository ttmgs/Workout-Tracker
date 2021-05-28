const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const app = express();


const PORT = process.env.PORT || 8080;



// static folder
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/public')));

// json data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// api routes
app.use('/exercise', require('./public/stats'));
app.get('/api/workout', require('./public/stats'));

// connecting to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false
});





app.listen(PORT, function() {
  console.log('port is running on http://localhost:' + PORT)
})