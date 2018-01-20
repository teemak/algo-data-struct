function pyramid(n) {
  const midpoint = Math.floor((2 *  n - 1) / 2); 
  
  for(let row = 0; row < n;  row++) {
    let level = '';

    for(let column = 0; column < 2 * n - 1; column++) {
      if(midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
  return '';
}

function pyramids(n, row = 0, level = '') {
  if(row === n) {
    return;
  }
  if(level.length === 2 * n - 1) {
    console.log(level);
    return pyramids(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if(midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramids(n, row, level + add);
}

let data = 7;
let result = pyramids(data);

console.log(result);
