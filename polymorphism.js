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

person1.details();
person2.details();
