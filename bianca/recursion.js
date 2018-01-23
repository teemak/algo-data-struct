let countDown = function(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

let recursiveCountDown = function(n) {
  while (n > 0) {
    console.log(n);
    return recursiveCountDown(--n);
  }
}

let exponent = function(base, expo) {
  let val = base;

  while (expo > 1) {
    val *= base;
    expo--;
  }
  return val;
}

let recursiveExponent = function(base, expo) {
  if (expo === 1) {
    return base;
  }
  return base * recursiveExponent(base, --expo);
}

let recursiveMultiplier = function(arr, num) {
  if (arr.length === 0) {
    return arr;
  }
  let last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last * num);
  return arr;
}

let recursiveReverse = function(arr) {
  let reverseArr = [];
  let addItems = function(orderedArr) {
    if (orderedArr.length > 0) {
      reversedArr.push(orderedArr.pop());
      addItems(orderedArr);
    }
    return;
  }
  addItems(arr);
  return reversedArr;
}
