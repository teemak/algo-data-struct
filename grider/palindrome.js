function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

const data = 'racecars';
const result = palindrome(data);

console.log(result);
