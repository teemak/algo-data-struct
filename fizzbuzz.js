function fizzBuzz(num) {
  let counter = 0;  

  if(counter === 0) {
    counter++;
  }

  while((num + 1) !== counter) {
    if(counter % 15 === 0) {      
      print('FizzBuzz');
    } else if(counter % 5 === 0) {
      print('Buzz');
    } else if(counter % 3 === 0) {
      print('Fizz');
    } else {
      print(counter);
    }
    counter++;
  }
  return ''; 
}

function print(string) {
  console.log(string);
}

let result = fizzBuzz(20);

console.log(result);
