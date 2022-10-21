//bring in dependancies
const { response } = require('express');
const express = require('express');


// binding variable to the express module
const app = express();


// express creates a server and adds a get method where we provide a path and a callback function with two peramaters (request and response) where the response parameters then sends a hello statement. Our first paramater request that is targetting the root directory. Here we provide a route for the target where we respond with html
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');

});
//the target here is contact where I then provide a route for the request and respons with the callback functions content
app.get('/contact', function (req, res) {
    res.send('<h2>Contact page</h2>');
})


// Route for about me page request
app.get('/about', function (req, res){
    res.send('<h2>About Me</h2>');
});



//using app to indicate what port to listen on the indicated port with an anonymous function housing a console message
app.listen(3000, function () {
    console.log("Server is listening on port 3000");
});