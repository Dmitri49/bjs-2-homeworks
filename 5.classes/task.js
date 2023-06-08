class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        if (number < 0 ) {
          this._state = 0;
        } else if (number > 100) {
          this._state = 100;
        } else {
          this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
}


class Library {

    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            for (let key in book) {
                if (key === type && book[key] === value) {
                    return book;
                }
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let key in this.books) {
            if (this.books[key].name === bookName) {
                return this.books.splice([key], 1)[0];
            }
        }

        return null;
    }
}



const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);

library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log(library);



// =============================================================================== //

// Practica //

// class Animal {
//     static type = 'ANIMAL';
    
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     }

//     voice() {
//         console.log('I am animal!');
//     }
// }

// class Cat extends Animal {    //привязываем cat к Animal
//     static type = 'CAT';

//     constructor(options) {    // добавление нового свойства color: black в конструктор только для Cat
//         super(options);       // обязательно. Вызов конструктора из Animal
//         this.color = options.color; // передача нового свойства
//     }
// }

// const cat = new Cat ({
//     name: 'Cat',
//     age: 32,
//     hasTail: true,
//     color: 'black',
// })

// console.log(cat);
// console.log(cat.name);
// console.log(Cat.type);
// console.log(cat.color);
// ================================================================ //
// Practica //

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);  // в переменную c $ обычно передают значение из DOM
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }

//     show() {
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)

//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color;
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })


// class Circle extends Box {
//     constructor(options) {
//         super(options);
//         this.$el.style.borderRadius = '50%';
//     }
// }

// const c = new Circle({
//     selector: '#circle',
//     size: 70,
//     color: 'green'
// })


// ===================================================== //


// class Sportsmen {
//     constructor() {
//         this.items = []
//     }

//     set birthYear(year) {
//         const date = new Date;
//         this.age = date.getFullYear() - year;
//     }

//     showAverage() {
//         if (this.items.length === 0) {
//             return "Keine"
//         }

//         let sum = 0;

//         for (let item of this.items) {
//             sum += item;
//         }
//         return sum / this.items.length;
//     }

//     addItem(item) {
//         this.items.push(item)
//     }
// }


// const dima = new Sportsmen();
// dima.birthYear = 1990; 

// dima.addItem(5)
// dima.addItem(4)

// console.log(dima.showAverage());
// console.log(dima.age);

// =========================================================== //
// Многоуровневое наследование //

// class A {
//     // возвращает случайное число
//     getRandomNumber() {
//         return Math.random();
//     }
// }
// class B extends A { }
// class C extends B { }

// const bobik = new C();

// console.log(bobik.getRandomNumber());


// ============================================================ //