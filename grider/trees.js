class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }

}

//Nodes not controlled by Tree opposite of linkedLists
class Tree {
  constructor() {
    this.root = null;
  }

  //Add to end hence PUSH - CEO to CTO to ENGINEER - each floor
  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }
  //Add to start hence UNSHIFT - All the way down DEPTH
  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }

}

const node = new Node('Tee');
node.add('Mak');
//node.remove('Mak');
node.add('Erza');

const familyB = [];
const familyD = [];
const teehee = new Tree();
teehee.root = node;
teehee.root.add('Crystal'); 
teehee.root.children[1].add('Oscar'); 

const tree = node;

/*
teehee.traverseBF(node => {
  familyB.push(node.data);
});

teehee.traverseDF(node => {
  familyD.push(node.data);
});

const pretty = JSON.stringify(teehee, null, 4);
console.log(`This is Breadth Search ${familyB}`);
console.log(`This is Depth Search ${familyD}`);
console.log(`Entire tree => ${pretty}`);
*/

module.exports = tree;
