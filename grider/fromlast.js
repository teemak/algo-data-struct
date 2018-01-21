const { list } = require('./linkedlists');

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  //advance the fast pointer
  while (n > 0) {
    if(!fast.next) {
      return list.getFirst();
    } 
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

let result = fromLast(list, 9);
let pretty = JSON.stringify(list, null, 4);
console.log(result);
