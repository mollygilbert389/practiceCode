var geocorder = require('geocoder')

var nodeArgs = process.argv;

var address =  ""

for (i=2; i < nodeArgs.length; i++) {
    address = address + " " + nodeArgs[i]
}

console.log(address)

geocorder.geocode("Atlanta, GA", function(err,data){
    console.log(JSON.stringify(data))
})

String url = "https://maps.googleapis.com/maps/api/directions/"+output+"?"+parameters + "&key=" + MY_API_KEY


 