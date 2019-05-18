
var car = {
    make: "Toyota",
    model: "Highlander",
    color: "Blue",
    mileage: 30000,
    isWorking: true,
    honk: function() {
        alert("Honk!");
    },
    driveToWork: function() {
        alert("Old Mileage " + car.mileage);

        car.mileage = car.mileage + 8;

        alert("New Mileage " + car.mileage)
    },
    driveAroundWorld: function() {
        alert("Old Mileage " + car.mileage);

        car.mileage = car.mileage + 8000;

        alert("New Mileage " + car.mileage)
        alert("Car needs a tuneup!")
        car.isWorking = false;
    },
    getTuneup: function() {
        alert("Car is ready to go!")
        car.isWorking = true;
    }


}

function writeStats () {
    console.log("Make: " + car.make)
    console.log("Model " + car.model)
    console.log("Color " + car.color)
    console.log("Mileage: " + car.mileage)
    console.log("Is working? " + car.isWorking)
    console.log("====================================")
}

document.onkeyup = function() {
    var letter = String.fromCharCode(event.keyCode).toLowerCase()
    if (letter === "h") {
        car.honk()
        writeStats();
    } 
    if (letter === "d") {
        car.driveToWork()
        writeStats();
    }
    if (letter === "w") {
        car.driveAroundWorld();
        writeStats();
    }
    if (letter === "t") {
        car.getTuneup();
        writeStats();
    }

}
