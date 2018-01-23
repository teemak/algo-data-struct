function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  let child = new Tree(value);
  this.children.push(child);
  return child;
}

let tree = new Tree(1);
let node1 = tree.addChild(2);
let node2 = tree.addChild(3);
let node3 = tree.addChild(4);
node1.addChild(5);
node2.addChild(6);
node3.addChild(7).addChild(8);

Tree.prototype.contains = function(value) {
  //Check if value IS first value
  if (this.value === value) return true;
  //Iterate and recursively call contain()
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) return true;
  }
  return false;
}

Tree.prototype.traverseDepthFirst = function(fn) {
  this.children.forEach(function(child) {
    child.traverseDepthFirst(fn);
  });
  fn(this);
}
/*RUN DFS */
let depthFirstResult = [];
tree.traverseDepthFirst(function(node) {
  depthFirstResult.push(node.value);
});

console.log('DFS result => ', depthFirstResult);

Tree.prototype.traverseBreadthFirst = function(fn) {
  let queue = [this];
  while (queue.length) {
    let node = queue.shift();
    fn(node.value);
    node.children.forEach(function(child) {
      queue.push(child);
    });
  }
};

let breadthFirstResult = [];
tree.traverseBreadthFirst(function(node) {
  breadthFirstResult.push(node);
});

console.log('BFS result => ', breadthFirstResult);

let result = JSON.stringify(tree, null, 4);

