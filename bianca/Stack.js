//Prototype Design Pattern
function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  //count is KEY || INDEX
  this._count = 0;  
};

Stack.prototype.push = function(value) {
  //Check for Stack Overflow
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Stack.prototype.pop = function() {
  //EDGE CASE - check for something to pop
  if (this._count === 0) {
    return 'No element inside the stack. Add element before popping.';
  }
  //Last element is value
  let value = this._storage[--this._count];
  delete this._storage[this._count];

  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

Stack.prototype.peek = function() {
  return this._storage[this._count - 1];
};

Stack.prototype.count = function() {
  return this._count;
};

const foods = new Stack(5);
foods.push('Pizza');
foods.push('Soda');
foods.push('Ice Cream');
foods.pop();

let result = foods.peek();
//console.log(result);
//console.log(foods);

module.exports = Stack;
