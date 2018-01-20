function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for(let char in chars) {
    if(chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

let data = 'Hello World';
let result = maxChar(data);

console.log(result);
