function fizz(num) {  

  for(let i = 1; i < num + 1; i++) {
    if(i % 15 === 0) {
      console.log('FizzBuzz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
    } else if(i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  } 
  return '';
}

let data = 37;
let result = fizz(data);

console.log(result);
