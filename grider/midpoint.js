const { list } = require('./linkedlists');

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

//list.insertFirst('Tee');
let result = midpoint(list);
let pretty = JSON.stringify(result, null, 4);

console.log(JSON.stringify(list, null, 4));
console.log(pretty);
