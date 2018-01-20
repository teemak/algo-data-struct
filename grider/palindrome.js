function palindrome1(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

//double comparison
function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

const data = 'racecar';
const result = palindrome2(data);

console.log(result);
