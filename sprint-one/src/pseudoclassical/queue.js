var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function (value) {
  if(this.head === this.tail) {
    this.head = 0;
    this.tail = 0;
  }
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function () {
  var res = undefined;
  if(this.head !== this.tail) {
    res = this.storage[this.head];
    this.head++;
  }
  return res;
};

Queue.prototype.size = function () {
  return this.tail - this.head;
};
