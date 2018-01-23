function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

Queue.prototype.dequeue = function() {
  //Element is first value || index
  let element = this._storage[this._head];
  //Delete first value
  delete this._storage[this._head];
  //Always make sure that queue moves forward
  if (this._head < this._tail) this._head++;
  return element;
};

Queue.prototype.peek = function() {
  return this._storage[this._head];
}

Queue.prototype.count = function() {
  return this._tail - this._head;
};

Queue.prototype.contains = function(value) {
  //Iterates only over the head to tail
  for (let i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
  return false;
};

Queue.prototype.until = function(value) {
  for (let i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return i - this._head + 1;
  }
  return null;
}

/*STACK*/
function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

Stack.prototype.pop = function() {
  let value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
}

Stack.prototype.peek = function() {
  return this._storage[this._count - 1];
}

Stack.prototype.count = function() {
  return this._count;
}
/*STACK*/

/*** Queue with Two Stacks ***/
function Queue_TwoStacks() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function(val) {
  this._stackIn.push(val);
};

Queue_TwoStacks.prototype._transferStacks = function() {
  while (this._stackIn.count()) {
    this._stackOut.push(this._stackIn.pop());
  }
}

Queue_TwoStacks.prototype.dequeue = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.pop();
}

Queue_TwoStacks.prototype.count = function() {
  return this._stackIn.count() + this._stackOut.count();
}

Queue_TwoStacks.prototype.peek = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackout.peek();
}
/*** Queue with Two Stacks ***/

const line = new Queue();
line.enqueue('Boa');
line.enqueue('Every Heart');
//line.dequeue();

let result = line.until('Boa');
console.log(line);
