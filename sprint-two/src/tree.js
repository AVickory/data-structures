var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));  // fix me
};

treeMethods.contains = function(target) {
  if (this.value === target) return true;

  var len = this.children.length;
  if (len === 0) return false;

  for (var k = 0; k < len; k++){
    if (this.children[k].contains(target)) return true;
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
