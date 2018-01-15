function reverseWords(string) {
  let wordsArr = string.split(' ');
  let reversedWordsArr = [];

  wordsArr.forEach(word => {
    let reversedWord = '';
    for(let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(' ');
}

let ogString = 'The fox jumped over the brown fence.';
let result = reverseWords(ogString);

console.log('The original string => ', ogString);
console.log('The reversed string => ', result);
