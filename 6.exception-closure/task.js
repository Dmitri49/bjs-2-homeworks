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