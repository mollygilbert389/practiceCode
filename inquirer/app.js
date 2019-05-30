var inquirer = require("inquirer")

function Programmer(name,position,age,language) {
    this.name = name
    this.position = position
    this.age = age
    this.language = language

    this.printInfo = function() {
        console.log("Name: " + this.name +"\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguage: " + this.language)
    } 
}

var count = 0;

var askQuestion = function() {
if (count < 2) {

inquirer.prompt([{
    name: "name",
    message: "What is your name?" 
}, {
    name: "position",
    message: "What is your position?"
}, {
    name: "age",
    message: "What is your age?"
}, {
    name:"language",
    message: "What is your language?"
}]).then(function(anwsers){
    var newPerson = new Programmer(anwsers.name, anwsers.position, anwsers.age, anwsers.language)
    newPerson.printInfo()
    count++
    askQuestion()
})
} else {
    console.log("All done!")
}
}

askQuestion()
