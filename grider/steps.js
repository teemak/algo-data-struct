function steps1(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';

    for(let column = 0; column < n; column++) {
      if(column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

/* RECURSION */
function steps(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

let data = 8;
let result = steps(data);

console.log(result);
