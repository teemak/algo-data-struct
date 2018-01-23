function permutations(str) {
  let results = {};

  function recurse(word, remainder) {
    if (remainder.length === 0) {
      return results[word] = true;
    }
    for (let i = 0; i < remainder.length; i++) {
      recurse(word + remainder[i], remainder.substr(0, i) + remainder.substr(i + 1)); 
    }
  }
  recurse('', str);
  return Object.keys(results);
}

let string = 'BAES';
let likey = 'MAKO'
let result1 = permutations(string);
let result2 = permutations(likey);

console.log(JSON.stringify(result1, null, 2));
console.log(JSON.stringify(result2, null, 2));
