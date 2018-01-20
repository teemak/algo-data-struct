function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

let data = -21;
let result = reverseInt(data);

console.log(result);
