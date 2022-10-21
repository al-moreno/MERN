// required dependancy 
const express = require('express');
const bodyParser = require('body-parser');

//reference variable for app with express method.
const app = express();




//implementing bodyparser with express where we are grabbing the data in our form with the urlencoded method with an extended option which allows us to post nexted objects.  Needed if we will be using bodyparser. 
app.use(bodyParser.urlencoded({extended: true}));



//route for root
app.get('/', function (req, res) {
    // res.send('<h1>Hello World</h1>')
    // respond with sending a file that gives us the exact path name + indicated file. 
    res.sendFile(__dirname + '/index.html');
});

//handle posst request
app.post('/', function(req, res) {
   var num1= req.body.num1;
   var num2= req.body.num2;
   var result = num1 + num2;
    res.send(result);
});

// setting listening port with anonymous function sending a message
app.listen(3000, function () {
    console.log("Server listening on port 3000.");
});