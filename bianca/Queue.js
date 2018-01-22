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

const line = new Queue();
line.enqueue('Boa');
line.enqueue('Every Heart');
//line.dequeue();

let result = line.until('Boa');
console.log(line);
console.log(result);
