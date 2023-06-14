// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalcFunction(2)
// console.log(calc());

// // ======================================= //

// function createIncrementor(n) {
//     return function(num) {
//         return n + num;
//     }
// }

// const addOne = createIncrementor(1)
// console.log(addOne(2));

// ======================================= //

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(ruUrl('divan'));

// ======================================= //





//-----------------THIS--------------------//





// function hello() {
//     console.log('Hello', this);
// }
// // hello()  // контекст ссылается на window

// const person1 = {
//     name: 'Dima',
//     age: 32,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(window), // bind связывает хелло с обьектом window. Bind возвращает новую функцию
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.group();
//     }
// }

// person1.sayHello() // контекст ссылается на person1
// person1.sayHelloWindow() // контекст ссылается на привязанный window
// person1.logInfo()


// const lena = {
//     name: 'Lena',
//     age: 22
// }

// person1.logInfo.bind(lena)();   // привязка функции logInfo к lena

// 1 Möglichkeit
// const lenaInfo = person1.logInfo.bind(lena); // сохнанение в переменную !! без () в конце
// lenaInfo('Web-Deweloper', '01789080425'); // передача параметров

// 2 Möglichkeit
// const lenaInfo = person1.logInfo.bind(lena, 'Web-Deweloper', '01789080425'); 
// lenaInfo();

// BIND   CALL    APPLY //
// person1.logInfo.bind(lena, 'Web-Deweloper', '01789080425')(); // bind возвращает функцию и её можно сохнарить и вызвать позже. 
// person1.logInfo.call(lena, 'Web-Deweloper', '01789080425'); // call сразу вызывает функцию
// person1.logInfo.apply(lena, ['Web-Deweloper', '01789080425']);


// ===================== //

// let array = [1, 2, 3, 4, 5]

// // function countNum(arr, n) {
// //     return arr.map((item) => item * n)
// // }
// // console.log(countNum(array, 2));

// // Möglichkeit mit prototype und This

// Array.prototype.countNum = function(n) {
//     return this.map((item) => item * n)
// }
// console.log(array.countNum(2));


// ==================================================== //







// Задача 1

function parseCount(num) {
    let result = Number.parseInt(num);
    if (Number.isNaN(result)) {
      throw new Error("Невалидное значение");
    }
  
    return result;
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (err) {
        return err;
    }
}

// Задача2

class Triangle {
  
    constructor(a, b, c) {
        if (a > (b + c) || b > (a + c) || c > (a + b)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
  
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = 0.5 * (this.a + this.b + this.c);
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return parseFloat(s);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return ('Ошибка! Треугольник не существует');
            },
            getArea() {
                return ('Ошибка! Треугольник не существует');
            }
        }
    }
}