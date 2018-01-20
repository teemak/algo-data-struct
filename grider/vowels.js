function vowels1(str) {
  //iterate string
  //if char matches vowel
  //increment counter
  
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for(let char of str.toLowerCase()) {
    if(checker.includes(char)) {
      count++;
    }
  }
  return count;
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

let data = 'Why would you ask this?';
let result = vowels(data);

console.log(result);
