var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function(value){
  var newTree = BinarySearchTree(value);
  if (value < this.value){
    if (this.left === null){ 
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value){
    if (this.right === null){ 
      this.right = newTree;
    } else {
      this.right.insert(value);
    }    
  }
};

BinarySearchTree.prototype.contains = function(value){
  if (value < this.value){
    return (this.left === null) ? false : this.left.contains(value);
  }
  if (this.value === value) return true;
  if (value > this.value){
    return (this.right === null) ? false : this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  var newTree = BinarySearchTree();
  newTree.value = callback(this.value);
  newTree.left = (this.left === null) ? null : this.left.depthFirstLog(callback);
  newTree.right = (this.right === null) ? null : this.right.depthFirstLog(callback);
  return newTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */