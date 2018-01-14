function isPalindrome(str) {
  str = str.toLowerCase();
  
  let letters = str.split('');
  let validChar = 'abcdefghijklmnopqrstuvxyz'.split('');

  let lettersArr = [];

  letters.forEach(char => {
    if(validChar.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) {
    return true;
  } else {
    return false;
  }

}

let result = isPalindrome('racecar');

console.log(result);
