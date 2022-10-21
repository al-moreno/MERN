const express = require("express");
//body parser allows us to pass between front and back
const bodyParser = require("body-parser");


const app = express();
//we request our express server use the bodyParser to pass information from an html form with extended to true which allows us to post nested objects. Requires an explicit declaration 
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});



app.post('/', function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result is: " + result);

});


// BMI HTML route handling

app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function (req, res) {

    var weight = Number(req.body.weight);
    console.log(weight);
    var height = Number(req.body.height);
    console.log(height);
    var bmiResults = (weight / (height ** 2)) * 703;
    console.log(bmiResults);


    res.send("Your body mass index is: " + bmiResults.toFixed(2));
});



















app.listen(3000, function () {
    console.log("Server listening on port 3000");
});