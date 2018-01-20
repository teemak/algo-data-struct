function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {

  if(n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

let result = memoize(fib)(9);
console.log(result);
