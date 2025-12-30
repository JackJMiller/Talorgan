let rootID = process.argv[2];
let path = process.argv[3];

const TREE_NODES = require(path);

console.log(TREE_NODES);

console.log(TREE_NODES.nodes[rootID]);
