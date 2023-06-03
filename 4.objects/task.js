function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  // this.marks = [];
  if(this.marks === undefined){ 
      this.marks = [mark]; // добавить первую оценку 
    } else {
      this.marks.push(mark); // добавить вторую и последующие оценки в массив
    }
}

Student.prototype.addMarks = function (...marks) {
  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}





































































// function Student(name, gender, age) {
//   this.name = name;
//   this.gender = gender;
//   this.age = age;
//     // Ваш код
// }

// Student.prototype.setSubject = function(subjectName) {
//   this.subject = subjectName;
//   //ваш код
// }


// Student.prototype.addMark = function(mark) {
//   if ( this.marks === undefined) {
//     this.marks = [];
//   }
//   this.marks.push(mark); 
// }

// Student.prototype.addMarks = function(...marks) {
//   if ( this.marks === undefined) {
//     this.marks = [];
//   }

//   for (let i =0; i < marks.length; i++) {
//     this.marks.push(marks[i]);
//   }
// }

// Student.prototype.getAverage = function() {
//   let sum = 0;

//   for (let i = 0; i < marks.length; i++) {
//     sum =+ marks[i];
//   }

//   return Math.floor(sum / marks.length);
// }

// Student.prototype.exclude = function(reason) {
//   delete this.subject;
//   delete this.marks;

//   this.reason = reason;
// }



