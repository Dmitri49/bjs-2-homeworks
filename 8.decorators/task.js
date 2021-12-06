function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    const idx = cache.findIndex((item) => hash === item.hash);

    if (idx !== -1) {
      console.log('Из кэша: ' + cache[idx].value);
      return 'Из кэша: ' + cache[idx].value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;

  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;

  function wrapper(...args) {

    if (!flag) {
      func(...args);
      flag = true;
    }

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      flag = false;
      func(...args);
    }, ms);
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {

    if (!flag) {
      wrapper.count++;
      func(...args);
      flag = true;
    }

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      flag = false;
      func(...args);
    }, ms);
  }
  return wrapper;
}
