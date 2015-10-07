var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.tail !== null) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    } else {
      list.tail = Node(value);
    }
    if(list.head === null) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    if(list.head !== null) {
      var temp = list.head.value
      list.head = list.head.next;
      return temp;
    }
  };

  list.contains = function(target) {
    for (var curr = list.head; curr !== null; curr = curr.next){
      if (curr.value === target) return true;  
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
