/* object is a collection of properties and methods. 
It is a fundamental data type in JavaScript and is used 
to store and manipulate data. Objects can be created 
using object literals, constructors, or classes. */

// object declaration
let car = {
  brand: "BMW",
  modal: "M Competition",
  year: 2015,
  engine: {
    engin_size: "2.0 L",
    cylinders: "Inline 4",
    hp: "180 hp @ 5,000 rpm",
    engine_type: "Gas",
    torque: "200 lb-ft @ 1,250 rpm",
  },
};


console.log(car);


let newCar = { ...car };
newCar.year = 2016;

let modifiedCar = JSON.stringify(newCar);
// console.log(newCar);
console.log(modifiedCar);
