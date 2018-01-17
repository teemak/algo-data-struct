function factorial(num) {
  if(num === 1)  {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

let result = factorial(8);

console.log(result);
