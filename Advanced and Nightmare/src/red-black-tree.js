//Nodes have a value, a color, left and right children and a parent.
//(value should default to null if not passed).

//insertion
  //add a node, as in BST, but but replacing a leaf and adding two more under.
  //

var RedBlackTree = function(parent, value, isBlack) {
  this.value = value;
  this.isBlack = parent === null ? true : !!isBlack;

  this.parent = parent;

  this.left = null;
  this.right = null;

};

RedBlackTree.prototype.insert = function(value){
  //add as leaf bst style
  if (value < this.value){
    if (this.left === null){ 
      this.left = new RedBlackTree(this, value);
      this.left.balance();
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value){
    if (this.right === null){ 
      this.right = new RedBlackTree(this, value);
      this.right.balance();
    } else {
      this.right.insert(value);
    }    
  }
};

RedBlackTree.prototype.balance = function() {
  var node = this;
  while (node.parent !== null && (!node.isBlack && !node.parent.isBlack)){
    var isLeftChild = node.parent.isLeftChild(node.parent.parent);
    var newNode;
    var uncle = isLeftChild ? node.parent.parent.right : node.parent.parent.left;
    if (uncle && !uncle.isBlack){
      uncle.repaint();
      node.parent.repaint();
      node.parent.parent.repaint();
      newNode = node.parent.parent;
    } else {
      if (isLeftChild){
        if (!node.isLeftChild(node.parent)){
          node = node.parent.rotateLeft();
        }
        newNode = node.parent.parent.rotateRight();
        newNode.repaint();
        newNode.right.repaint();
      } else {
        if (node.isLeftChild(node.parent)){
          node = this.parent.rotateRight();
        }
        newNode = node.parent.parent.rotateLeft();
        newNode.repaint();
        newNode.left.repaint();
      } 
    }
    node = newNode;
  }
  if(node.parent === null) {
    node.isBlack = true;
  }

};

RedBlackTree.prototype.repaint = function() {
  this.isBlack = !this.isBlack;
};

RedBlackTree.prototype.rotateLeft = function() {
  var a  = this; 
  var b = a.right;
  var c = a.parent;

  isLeft = c ? a.isLeftChild(c) : null;

  a.right = b.left;
  b.left = a;

  a.parent = b;
  b.parent = c;

  if(c !== null && isLeft) {
    c.left = b;
  } else {
    c.right = b;
  }

  return b;
};

RedBlackTree.prototype.rotateRight = function() {
  var a  = this; //c
  var b = a.left;
  var c = a.parent;

  isLeft = c ? a.isLeftChild(c) : null;

  a.left = b.right;
  b.right = a;

  a.parent = b;
  b.parent = c;

  if(c !== null && isLeft) {
    c.left = b;
  } else {
    c.right = b;
  }

  return b;
}

RedBlackTree.prototype.isLeftChild = function(parent) {
  return parent.left.value === this.value;
};

RedBlackTree.prototype.traverse = function () {
  if(this !== null) {
    var arr = [[this.value, this.isBlack].toString()];
    if(this.left) {
      arr = this.left.traverse().concat(arr);
    }
    if(this.right) {
      arr = arr.concat(this.right.traverse());
    }

    return arr;
  } else {
    return [];
  }
};

var root = new RedBlackTree(null, 5, true);
console.log(root.traverse());
root.insert(4);
console.log(root.traverse());
root.insert(6);
console.log(root.traverse());
root.insert(5.5);
console.log(root.traverse());
root.insert(7);
console.log(root.traverse());
root.insert(8);
console.log(root.traverse());
root.insert(2);
console.log(root.traverse());
root.insert(4.5);
console.log(root.traverse());
root.insert(1);
console.log(root.traverse());
root.insert(0);
console.log(root.traverse());

/*
 * Complexity: What is the time complexity of the above functions?
 */