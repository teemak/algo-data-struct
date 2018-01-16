function twoSum(numArray, sum) {
  let pairs = [];
  let hashtable = [];

  for(let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterpart = sum - currNum;
    if(hashtable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashtable.push(currNum);
  }
  return pairs;
}


let data = [1,6,3,4,3,5];
let result = twoSum(data, 7);

console.log(result);
