/* RULES
  0.The tree is a binary search tree (except for leaves!)
  1.All nodes are either red or black
  2.All leaves are null and black
  3.If a node is red then both it's children are black
  4.Every path from a node to it's children null nodes has the same number of black nodes.  
    This number is called the black-height.
  5.The root is always black.
*/

describe('red-black-tree', function() {
  // var redBlackTree;
  // var rule0;
  // var rule1;
  // var rule2;
  // var rule3;
  // var rule4;
  // var rule5;
  // var root

  // var isRedBlackTree = function (rbTree) {
  //   //takes in an object and returns an array with indicies corresponding to each rule.
  //   //if a rule holds for the object it is set to true, else it is set to false.

  //   var rulesPassed = [true, true, true, true, true, true];
    
  //   var isrbt = function (rbt) {
  //     if(rbt.parent === null && rbt.isRed) {
  //       rulesPassed[5] = false;
  //     }

  //     if(rbt.left !== null && rbt.right !== null) {
  //       if(rbt.left.value !== null && rbt.left.value >= rbt.value) {
  //         rulesPassed[0] = false;
  //       }
  //       if(rbt.right.value !== null && rbt.right.value <= rbt.value) {
  //         rulesPassed[0] = false;
  //       }
  //     }

  //     if((rbt.left === null && rbt.right === null) && (rbt.value !== null || rbt.isRed)) {
  //       rulesPassed[2] = false;
  //     }

  //     if (rbt.isRed) {
  //       if(rbt.left.isRed || rbt.right.isRed) {
  //         rulesPassed[3] = false;
  //       }
  //     }
      
  //     if(rbt.left === null) {
  //       leftCount = 0;
  //     } else {
  //       var leftCount = isrbt(rbt.left);
  //     }
  //     if(rbt.right === null) {
  //       rightCount = 0;
  //     } else {
  //       var rightCount = isrbt(rbt.right);
  //     }

  //     if(leftCount !== rightCount) {
  //       rulesPassed[4] = false;
  //       leftCount = (leftCount + rightCount) / 2;
  //     }

  //       return !rbt.isRed ? 1 + leftCount : leftCount;
  //   };

  //   isrbt(rbTree);

  //   return rulesPassed;
  // };

   beforeEach(function() {
  //   root = new RedBlackTree(null, 1, true);
  });

  it('should create a root', function () {
    // expect(root.value).to.be.eql(1);
    // expect(root.isBlack).to.be.eql(true);
    // expect(root.parent).to.be.eql(null);
    // expect(root.left).to.be.eql(null);
    // expect(root.right).to.be.eql(null);
  });

  it('should rotate', function () {
    // root.left = new RedBlackTree(root, 0, false);
    // root.left.left = new RedBlackTree(root.left, -1, true);
    // root = root.left.rotateRight();
    // expect(root.left.right.value).to.be.eql(1);
    // expect(root.left.value).to.be.eql(0);
  });

  it('should be a binary search tree', function() {
    // var arr = [7,3,18,10,22,8,11,26]
    // for(var i  = 0; i < arr.len; i++) {
    //   console.log(i);
    //   redBlackTree.insert(arr[i]);
    //   rule0 = (isRedBlackTree(redBlackTree))[0];
    //   expect(rule0).to.be.equal(true);
    // }
    // expect(rule0).to.be.equal(true);
  });

  it('should only contain nodes that are red or black', function(){
    //OPERATIONS HERE
    //rule1 = (isRedBlackTree(redBlackTree))[1];
    expect(rule1).to.be.equal(true);
  });

  it('should only contain black leaves with values of null', function(){
    //OPERATIONS HERE
    //rule2 = (isRedBlackTree(redBlackTree))[2];
    expect(rule2).to.be.equal(true);
  });

  it('should not contain red nodes with red children', function(){
    //OPERATIONS HERE
    //rule3 = (isRedBlackTree(redBlackTree))[3];
    expect(rule3).to.be.equal(true);
  });

  it('should have the same number of black nodes in every path from a node to a leaf', function(){
    //OPERATIONS HERE
    //rule4 = (isRedBlackTree(redBlackTree))[4];
    expect(rule4).to.be.equal(true);
  });
});