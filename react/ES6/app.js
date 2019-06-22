//extending class using prototype

function Plane() {
    this.wings = 2;
    this.speed = 100;
    this.altitude = 0;
}

Plane.prototype.fly = function () {
    this.altitude = 3000;
}

const myPlane = new Plane();


function JetFighter() {
    this.speed = 1000;
}

JetFighter.prototype = new Plane ();

const myJetFighter = new JetFighter();

console.log(myJetFighter)

//classes using class keyword

class Human {
    constructor(height) {
        this.height = height;
        this.location = {
            x: 0,
            y: 0,
        }
    }

    walk (x,y) {
        this.location.x =+ x;
        this.location.y =+ y;
    }
    // 
    static sayHello() {
        return "Hi there!"
    }
}

class Warrior extends Human {
    constructor() {
        super();
        this.strength = 10;

    }

}

const ryan = new Human (149)
ryan.walk(14,6)
console.log(ryan)

const myWarrior = new Warrior(200);
console.log(myWarrior)

console.log(Human.sayHello())