function compareArrays(arr1, arr2) {
  return result = arr1.length === arr2.length && arr1.every((number, i) => number === arr2[i]);
}

function advancedFilter(arr) {
  return resultArr = arr.filter((number) => number > 0 && number % 3 === 0).map((number) => number * 10);
}
