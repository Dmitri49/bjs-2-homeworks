"use strict";

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    return [( - b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
    return [- b / (2 * a)];
  }

  return []; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  let array = [
    ['Процентная ставка', percent],
    ['Начальный взнос', contribution],
    ['Общая стоимость', amount],
  ];

  for (let i = 0; i < array.length; i++) {

    let parametr = array[i][0];
    let option = array[i][1];

    if (isNaN(option)) {
      return `Параметр ${parametr} содержит неправильное значение ${option}`;
    }
  }

  let p = percent / 100 / 12;
  let creditMonths = numbeOfMonths()

  let bodyCredit = amount - contribution;

  let payment = bodyCredit * (p + p / (((1 + p) ** creditMonths) - 1));

  let totalPercent = (payment - (amount / creditMonths)) * creditMonths;

  totalPercent = Number(totalPercent);
  amount = Number(amount);

  totalAmount = Number((totalPercent + amount).toFixed(2));

  console.log(totalAmount);
  return totalAmount;

  function numbeOfMonths() {
    let now = Date.now();
    let finish = new Date(date).getTime();
  
    let dateDifference = finish - now;
    let numbeOfMonths = Math.trunc(dateDifference / 2568800000);
    
    return numbeOfMonths;
  }

}


