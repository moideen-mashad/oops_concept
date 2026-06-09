/* Abstraction is an OOP concept that focuses on hiding
the internal details of an object and exposing only 
the necessary features to the user. 
It allows us to create complex systems by breaking them down into 
simpler, more manageable parts. In JavaScript, we can achieve 
abstraction using classes and objects. */

// Abstraction example

class Car {
    constructor(name, series, color) {
        this.name = name;
        this.series = series;
        this.color = color;
    }

    // Public method
    getCarDetails() {
        return `${this.name} ${this.series} (${this.color})`;
    }

    // Internal method (users don't need to know how it works)
    startEngine() {
        return "Engine Started...";
    }

    // Exposed method
    drive() {
        return `${this.startEngine()} Car is moving.`;
    }
}

// Creating object
const car1 = new Car("Mercedes", "W15", "Silver");

console.log(car1.getCarDetails());
console.log(car1.drive());
