function reverse1(str) {
  let reversed = '';

  for(let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

let data = 'The brown fox';
let result = reverse(data);

console.log(result);
