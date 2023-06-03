function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] > max) {
        max = arr[i];
    } else if (arr[i] < min) {
        min = arr[i]
    }
  }

  avg = +(sum / arr.length).toFixed(2);

  return {
    max: max,
    min: min,
    avg: avg,
  }
}

// ======================== //


function makeWork(arrOfArr,func) {
    console.log(arrOfArr);
  
    let amount = 0;
  
    for (let i = 0; i < arrOfArr.length; i++) {
      if (func(arrOfArr[i]) > amount) {
        amount = func(arrOfArr[i]);
      }
    }
  
    console.log(amount);
  
    return amount;
}


function worker(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
      
    return sum;
}

function worker2(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if  (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i]
      }
    }

    return Math.abs(min - max);
  }
