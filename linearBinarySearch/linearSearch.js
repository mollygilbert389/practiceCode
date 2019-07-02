var length = 14;
var operator = generate(length)
var randomValue = operator[Math.floor(Math.random() * length)];

function generate(length) {
    var arr = [];
    for (var i=0;i<length;i++){
        arr.push(Math.random() * length)
    }
    return arr;
}

for (var i=0; i<length; i++) {
    if(stuff[i] == randomValue) {
        console.log(i+": "+randomValue)
    }
}