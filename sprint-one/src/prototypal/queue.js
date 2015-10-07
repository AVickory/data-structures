var Queue = function() {
  var someInstance = Object.create(queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  if(this.head === this.tail) {
    this.head = 0;
    this.tail = 0;
  }
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function () {
  var res = undefined;
  if(this.head !== this.tail) {
    res = this.storage[this.head];
    this.head++;
  }
  return res;
};

queueMethods.size = function () {
  return this.tail - this.head;
};



