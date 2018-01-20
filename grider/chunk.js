function chunk1(arr, size) {
  const chunked = [];

  for(let element of arr) {
    const last = chunked[chunked.length - 1]

    if(!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

function chunk2(arr, size) {
  const chunked = [];
  let index = 0;

  while(index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
}

let data = [1,2,3,4,5,6,7];
let result = chunk2(data, 2);

console.log(result);
