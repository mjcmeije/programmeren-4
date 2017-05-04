/**
 * Created by bcc on 18-4-2017.
 */

//var config  = require('./config.json');
var express = require('express');
var app = express();

app.set('PORT', config.webPort);

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by Mark Meijer');
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})

// Start the server
var port = process.env.port || 3000;

app.listen(port);



// var port = process.env.port || app.get('PORT');
//
// app.listen(port, function() {
//     console.log('The magic happens at http://localhost:'+ port + ' !!!!!!!');
// });




// app.listen(3000, function() {
//     console.log('Server app is listening on port 3000');
// })
