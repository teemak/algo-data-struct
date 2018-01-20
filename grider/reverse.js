function reverse1(str) {
  let reversed = '';

  for(let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverse2(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

function reverse3(str) {
  debugger;
  return str.split('').reverse().join('');
}

let data = 'The brown fox';
let result = reverse3(data);

console.log(result);
