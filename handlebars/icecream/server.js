var express = require ("express")
var exphbs = require("express-handlebars")

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

var port = 3000;
app.listen(port)
console.log("Listening on port" + port)

var icecreams =[
    {name: "vanilla", price: 10, awesomeness: 3},
    {name: "chocolate", price: 4, awesomeness: 7},
    {name: "banana", price: 3, awesomeness: 4}

]

app.get('/', function(req,res){
    res.render('icecreams', {ics: icecreams})
})

app.get('/:name', function(req,res){
    for (var i=0; i<icecreams.length; i++){
        if (icecreams[i].name == req.params.name){
            return res.render('icecream', icecreams[i])
        }
    }
})