/* Encapsulation is the OOP concept of combining data and methods 
inside a class and restricting direct access to internal data 
 to protect it from unintended modification. */

class car {
  constructor(name, series, color) {
    this.name = name;
    this.series = series;
    this.color = color;
  }
  modal_year(year, edition) {
    this.year = year;
    this.edition = edition;
  }
  getDetails() {
    return `The car is ${this.name} ${this.series} ${this.edition} ${this.year} and its color is ${this.color}`;
  }
}

let newCar = new car("BMW", "M3", "black");
newCar.modal_year(2015,"Redbull");
console.log(newCar.getDetails());
