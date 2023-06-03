// "use strict";

// function solveEquation(a, b, c) {
//   let discriminant = b ** 2 - 4 * a * c;

//   if (discriminant > 0) {
//     return [( - b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
//   } else if (discriminant === 0) {
//     return [- b / (2 * a)];
//   }

//   return []; // array
// }

// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;
  
//   let array = [
//     ['Процентная ставка', percent],
//     ['Начальный взнос', contribution],
//     ['Общая стоимость', amount],
//   ];

//   for (let i = 0; i < array.length; i++) {

//     let parametr = array[i][0];
//     let option = array[i][1];

//     if (isNaN(option)) {
//       return `Параметр ${parametr} содержит неправильное значение ${option}`;
//     }
//   }

//   let p = percent / 100 / 12;
//   let creditMonths = numbeOfMonths()

//   let bodyCredit = amount - contribution;

//   let payment = bodyCredit * (p + p / (((1 + p) ** creditMonths) - 1));

//   let totalPercent = (payment - (amount / creditMonths)) * creditMonths;

//   totalPercent = Number(totalPercent);
//   amount = Number(amount);

//   totalAmount = Number((totalPercent + amount).toFixed(2));

//   console.log(totalAmount);
//   return totalAmount;

//   function numbeOfMonths() {
//     let now = Date.now();
//     let finish = new Date(date).getTime();
  
//     let dateDifference = finish - now;
//     let numbeOfMonths = Math.trunc(dateDifference / 2568800000);
    
//     return numbeOfMonths;
//   }

// }





// let a = 2;
// let b = 10;

// let c;
// c = (b % a === 0) ? 'Hello' : 'By';

if (!false) {
  console.log('Hello');
} else {
  console.log('By');
}

let a = [2, 3, 4]

let b = a;

b.push(5);

console.log(b);
console.log(a);


let arr1 = 'hello23DD';
let arr2 = 'hello24DD';

console.log(arr1 === arr2);

let awd;
console.log(awd);


function check (g, e, ...data) {
  console.log(g, e);
  let arrH = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      arrH.push(data[i])
    }
  }
  console.log(arrH);
}

check('hello', 'by', 3, 4, 5, 6)


let sum = function(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

let sum3 = (a, b) => {
  return a + b;
}


let obj = {
  name: 'Dima',
  age: 32,
  gender: 'male',

  year: function() {
    return 1990;
  },

  sayName: function() {
    return `Your name is ${this.name}`
  }
}

console.log(obj.year());

console.log(obj.sayName());

function showName() {
  console.log(`Your name is ${this.name}`);
}

let ivan = {
  name: 'Ivan',
  age: 33,
  showName,
}

let dima = {
  name: 'Dima',
  age: 32,
  showName,
}

ivan.showName();


function Person(name, age, gender, hobby, city) {
  this.name = name,
  this.age = age,
  this.gender = gender,
  this.hobby = hobby,
  this.city = city
}

const person1 = new Person('Dima', 32, 'Male');

console.log(person1.hobby);

person1.hobby = 'Drums';
console.log(person1.hobby);


function example1() {
  let innerExample1Func = () =>
    "Hello";
    return innerExample1Func();
}

 function example2() {
  let innerExample2Func = () =>
    "Hello";
     return innerExample2Func;
}

console.log(example1());
console.log(example2());




// function getArrayParams(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   let sum = 0;
//   let avg = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (arr[i] > max) {
//         max = arr[i];
//     } else if (arr[i] < min) {
//         min = arr[i]
//     }
//   }

//   avg = (sum / arr.length).toFixed(2);

//   return {
//     max: max,
//     min: min,
//     avg: avg,
//   }
// }

// console.log(getArrayParams([-99, 99, 10]));

