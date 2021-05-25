const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 8080;




// static folder
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/public')));




// api routes
app.use('/exercise', require('./routes/api'));
app.get('/api/workout', require('./routes/api'));






app.listen(PORT, function() {
  console.log('port is running on http://localhost:' + PORT)
})