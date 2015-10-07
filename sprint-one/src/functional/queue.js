var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if(head === tail) {
      head = 0;
      tail = 0;
    }

    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    var res = undefined;
    if(head !== tail) {
      res = storage[head];
      head++;
    }
    return res;
  };

  someInstance.size = function() {
    return tail-head;
  };

  return someInstance;
};
