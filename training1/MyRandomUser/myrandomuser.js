/**
 * Created by bcc on 18-4-2017.
 */

var express = require('express');
var app = express();

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by Mark Meijer');
})

// app.post('/', function(request, response) {
//     response.send('Hello Avans, POST request received!');
// })
//
// app.put('/', function(request, response) {
//     response.send('Hello Avans, PUT request received!');
// })



app.listen(3000, function() {
    console.log('Server app is listening on port 3000');
})
