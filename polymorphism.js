/* Polymorphism is an OOP concept where the same method or interface behaves 
differently depending on the object that calls it. */

class person {
  details() {
    console.log(` is from India`);
  }
}

class student extends person {
  details() {
    console.log(` He is a student`);
  }
}
class teamLeader extends person {
  details() {
    console.log(`and also a team lead`);
  }
}

let person1 = new person();
let person2 = new student();
let person3 = new teamLeader();

person1.details();
person2.details();
