const tree = require('./trees');

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const index = arr.shift();

    if (index === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...index.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

tree.children[2].add('Prince');

const result = levelWidth(tree);
//console.log(JSON.stringify(tree, null, 4));
console.log(result);
