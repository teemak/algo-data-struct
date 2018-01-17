const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function binarySearch(numArray, key) {
  let middleIdx = Math.floor(numArray.length / 2);
  let middleElem = numArray[middleIdx];

  if(middleElem === key) return true;
  else if(middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } 
  else if(middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else return false;  
}

let data = [5,7,12,16,36,39,42,56,71];
console.log(`This is the array to search: ${data}`);

rl.question('Enter number to search: ', userInput => {  
  //console.log('This is the array: ', data);
  //console.log(`You are searching for ${userInput}`);
  userInput = parseInt(userInput);
  console.log(binarySearch(data, userInput));
});
