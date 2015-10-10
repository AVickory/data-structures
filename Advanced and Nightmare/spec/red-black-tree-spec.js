/* RULES
  0.The tree is a binary search tree (except for leaves!)
  1.All nodes are either red or black
  2.All leaves are null and black
  3.If a node is red then both it's children are black
  4.Every path from a node to it's children null nodes has the same number of black nodes.  
    This number is called the black-height.
*/

describe('prefix-tree', function() {
  var redBlackTree;
  var rule0;
  var rule1;
  var rule2;
  var rule3;
  var rule4;

  var isRedBlackTree = function (rbTree) {
    //takes in an object and returns an array with indicies corresponding to each rule.
    //if a rule holds for the object it is set to true, else it is set to false.

    var rulesPassed = [true, true, true, true, true];
    
    var isrbt = function (rbt) {
      if(rbt.left !== undefined && rbt.right !== undefined) {
        if(rbt.left.value !== null && rbt.left.value >= rbt.value) {
          rulesPassed[0] = false;
        }
        if(rbt.right.value !== null && rbt.right.value <= rbt.value) {
          rulesPassed[0] = false;
        }
      }

      if(rbt.color !== 'red' && rbt.color !== 'black') {
        rulesPassed[1] = false;
      }

      if((rbt.left === undefined && rbt.right === undefined) && (rbt.value !== null || rbt.color !== 'black')) {
        rulesPassed[2] = false;
      }

      if (rbt.color === 'red') {
        if(rbt.left.color !== 'black' || rbt.right.color !== 'black') {
          rulesPassed[3] = false;
        }
      }
      
      if(rbt.left === undefined) {
        leftCount = 0;
      } else {
        var leftCount = isrbt(rbt.left);
      }
      if(rbt.right === undefined) {
        rightCount = 0;
      } else {
        var rightCount = isrbt(rbt.right);
      }

      if(leftCount !== rightCount) {
        rulesPassed[4] = false;
        leftCount = (leftCount + rightCount) / 2;
      }

        return rbt.color === black ? 1 + leftCount : leftCount;
    };

    isrbt(rbTree);

    return rulesPassed;
  };

  beforeEach(function() {
    redBlackTree = new RedBlackTree();
  });

  it('should be a binary search tree', function() {
    //OPERATIONS HERE
    rule0 = (isRedBlackTree(redBlackTree))[0];
    expect(rule0).to.be.equal(true);
  });

  it('should only contain nodes that are red or black', function(){
    //OPERATIONS HERE
    rule1 = (isRedBlackTree(redBlackTree))[1];
    expect(rule1).to.be.equal(true);
  });

  it('should only contain black leaves with values of null', function(){
    //OPERATIONS HERE
    rule2 = (isRedBlackTree(redBlackTree))[2];
    expect(rule2).to.be.equal(true);
  });

  it('should not contain red nodes with red children', function(){
    //OPERATIONS HERE
    rule3 = (isRedBlackTree(redBlackTree))[3];
    expect(rule3).to.be.equal(true);
  });

  it('should have the same number of black nodes in every path from a node to a leaf', function(){
    //OPERATIONS HERE
    rule4 = (isRedBlackTree(redBlackTree))[4];
    expect(rule4).to.be.equal(true);
  });
});