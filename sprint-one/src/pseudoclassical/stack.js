var Stack = function() {
  this.len = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

};


Stack.prototype.pop = function () {
  if(this.len > 0) {
    this.len--;
    return this.storage[this.len];
  }
  return undefined;
};

Stack.prototype.push = function (value) {
  this.storage[this.len] = value;
  this.len++;
};

Stack.prototype.size = function () {
  return this.len;
}