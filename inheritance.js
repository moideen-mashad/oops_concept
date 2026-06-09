/* Inheritance is an OOP concept where a child 
 class acquires the properties and methods of a parent class. */

// Inheritance example
class person {
  constructor(name) {
    this.name = name;
  }
  // method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}
class student extends person {
  constructor(name, id) {
    // super keyword for calling the above
    // class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()},
        Student ID: ${this.id}`;
  }
}
let student1 = new student("Mukul", 22);
console.log(student1.toString());
console.log(typeof student1);
