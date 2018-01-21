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


  //Add to end hence PUSH
  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }
  //Add to start hence UNSHIFT
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
node.remove('Mak');
node.add('Erza');

const teehee = new Tree();
teehee.root = node;
teehee.root.children[0].add('Crystal'); 

const pretty = JSON.stringify(teehee, null, 4);
console.log(pretty);
