function matrix(n) {
 const results = [];

 for(let i = 0; i < n; i++) {
  results.push([]);
 }

 let counter = 1;
 let startColumn = 0;
 let endColumn = n - 1;
 let startRow = 0;
 //endRow is last index of array
 let endRow = n - 1;
  
 while(startColumn <= endColumn && startRow <= endRow) {
  for(let i = startColumn; i <= endColumn; i++) {
    results[startRow][i] = counter;
    counter++;
  }
  startRow++;
  
  for(let i = startRow; i <= endRow; i++) {
    results[i][endColumn] = counter;
    counter++;
  }
  endColumn--;

  for(let i = endColumn; i >= startColumn; i--) {
    results[endRow][i] = counter;
    counter++;
  }
  endRow--;

  for(let i = endRow; i >= startRow; i--) {
    results[i][startColumn] = counter;
    counter++;
  }
  startColumn++;
 } 
 return results;
}

let data = 6;
let result = matrix(data);

console.log(result);

/* Chris's implementation
// Outer loop then increase index loop again rinse repeat
function matrix(n) {
 
  var matrix = [];
 
  for (let i = 1; i <= n; i++) {
   matrix.push([]);
  }
 
  let sqPos = 0;
  let sqSize = n;
  let row;
  let col;
  let num = 1;
 
  // square size loop
  for (let i = sqSize; i >= 1; i-=2) {
    row = sqPos;
    col = sqPos;
   
    // top of square
    for (let j = sqPos; j < sqSize + sqPos; j++) {
     matrix[row][j] = num;
     num++;
     col = j;
    }
 
    // right side of square
    for (let j = row + 1; j < sqSize + sqPos; j++) {
     matrix[j][col] = num;
     num++;
     row = j;
    }
 
    // bottom of square
    for (let j = row - 1; j >= sqPos; j--) {
     matrix[row][j] = num;
     num++;
     col = j;
    }
 
    // left side of square
    for (let j = row - 1; j >= sqPos + 1; j--) {
     matrix[j][col] = num;
     num++;
     row = j;
    }
 
    sqSize-=2;
    sqPos++;
 
    if (sqSize <= 0) {
     return matrix;
    }
 
  }
 
}
*/
