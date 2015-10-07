var Stack = function() {
  var someInstance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  someInstance.storage = {};
  someInstance.len = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.pop = function () {
  if(this.len > 0) {
    this.len--;
    return this.storage[this.len];
  }
  return undefined;
};

stackMethods.push = function (value) {
  this.storage[this.len] = value;
  this.len++;
};

stackMethods.size = function () {
  return this.len;
}


