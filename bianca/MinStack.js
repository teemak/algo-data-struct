const Stack = require('./Stack');

function MinStack(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

MinStack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    if (this._min.peek() < value) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

MinStack.prototype.pop = function() {
  this._min.pop();
  let value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

MinStack.prototype.peek = function() {
  return this._storage[this._count - 1];
}

MinStack.prototype.count = function() {
  return this._count;
}

MinStack.prototype.min = function() {
  return this._min.peek();
}

let minis = new MinStack(2);
minis.push('Hello');

console.log(minis);
