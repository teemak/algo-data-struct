const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(arr) {
  let sum = 0;

  arr.forEach(num => {
    sum += num;
  });
  let mean = sum / arr.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a,b) {
    return a - b
  });
  let median;

  if(array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    let mid1 = array[(array.length / 2) - 1];
    let mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

function getMode(array) {
  let modeObj = {};
  
  array.forEach(num => {
    if(!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;    
  });

  let maxFrequency = 0;
  let modes = [];

  for(let num in modeObj) {
    if(modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if(modeObj[num] === maxFrequency) modes.push(num);
  }
    
  if(modes.length === Object.keys(modeObj).length) modes = [];
  return modes;  
}

let data1 = [1,2,3,4,5,4,6,1];
let data2 = [9,10,23,10,23,9];

let result = meanMedianMode(data1);

console.log(result);

/* rl.question('Enter Array: ', userInput => {
  console.log('This is the average of the numbers: ', meanMedianMode([userInput]));
}); */
