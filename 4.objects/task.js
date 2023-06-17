function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark) // добавить первую оценку 
    } else {
      this.marks.push(mark) // добавить вторую и последующие оценки в массив
    }
}

Student.prototype.addMarks = function (...marks) {
  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;

  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }

  let average = sum / this.marks.length;

  return +(average.toFixed(4));
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}


let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); //4.6666
console.log(student1);


let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2);






// ============================================================================= //


// let ivan = {
//   firstName: "Dmitri",
//   lastName: "Lissin",
//   'name and surname': 'Dmitri Lissin',
// };

// console.log(ivan['name and surname']);

// let key = 'firstName';
// console.log(ivan[key]);

// ======================================= //

// for (let key in ivan) {
//   console.log(ivan[key]);
//   // console.log(`${key} = ${ivan[key]}`);
// }


// ======================================= //

// function showObject(name, surname) {
//   return {          // длинный вариант записи return {name: name, surname: surname}
//     name,
//     surname,
//   }
// }

// let student = showObject('Dmitri', 'Lissin')
// console.log(student);

// ======================================= //

// let ivan = {
//   firstName: "Dmitri",
//   lastName: "Lissin",
//   'name and surname': 'Dmitri Lissin',
// };

// delete ivan.firstName;       // DELETE
// console.log(ivan);

// ======================================= //
// object ist nur ein Link. Object kann man wechseln

// let ivan = {
//   firstName: "Dmitri",
//   lastName: "Lissin",
//   age: 32,
// };

// let dima = ivan;
// dima.age = 18;   // change - изменение
// console.log(ivan); // age: 18

// ====================================== //
// cloning object
// let ivan = {
//   name: "Ivan",
//   age: 32,
// };

// let user = Object.assign({}, ivan);  //клонирование ivan
// console.log(user);
// user.age = 18;
// console.log(ivan);
// console.log(user);

// ====================================== //
//проверка наличия значения - checking if a value exists

// let ivan = {
//   name: "Ivan",
//   age: 32,
//   address: {
//     city: 'Wladimir',
//     street: 'Lenina',
//   }
// };

// if (ivan.age) {      // если age нет, то всё ок
//   console.log(ivan.age);
// }

// // console.log(ivan.address.city);  // если такого нет, то Error
// console.log(ivan?.address?.city);  // если такого нет, то undefined

// ===================================== //

// let ivan = {
//   name: "Ivan",
//   age: 32,
//   show() {
//     console.log(`This is ${this.name}`);
//   }
// };

// ivan.show();

// ==================================== //

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person('Dima', 32);
// const person2 = new Person('Ivan', 30)

// console.log(person1);
// console.log(person2);

// ==================================== //

// Object.prototype.showName = function () {
//   console.log('Hello');
// }

// const per = {}

// console.log(per.showName());

// ==================================== //