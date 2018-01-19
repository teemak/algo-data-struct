function bubbleSort(array) {
  let counter = 0;
  for(let i = array.length; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        console.log(counter++);
      }
    }
  }
  return array;
}

let data = [5,3,8,2,1,4];
let result = bubbleSort(data);

console.log(result);
