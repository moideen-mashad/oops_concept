class car {
  constructor(name, series, color) {
    this.name = name;
    this.series = series;
    this.color = color;
  }

  getDetails() {
    return `The car is ${this.name} ${this.series} and its color is ${this.color}`;
  }
}


class scooter extends car {
  constructor(name, series, color, type) {
    super(name, series, color);
    this.type = type;
  }
  getDetails() {
    return `The scooter is ${this.name} ${this.series} and its color is ${this.color} and its type is ${this.type}`;
  }
}

let newScooter = new scooter("Vespa", "LX", "red", "scooter");
console.log(newScooter.getDetails());




let newCar = new car("BMW", "M3", "black");
console.log(newCar.getDetails());

console.log(typeof newScooter); // object
console.log(typeof newCar); // function