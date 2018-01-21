class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}

let odd = [1,3,5,7];
let even = [2,4,6,8];

let qOdd = new Queue();
let qEven = new Queue();

qOdd.add(1);
qOdd.add(3);
qOdd.add(5);
qOdd.add(7);

qEven.add(2);
qEven.add(4);
qEven.add(6);
qEven.add(8);


let result = weave(qOdd, qEven);
console.log(result);
