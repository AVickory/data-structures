

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage= LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket === undefined) {
    bucket = {};
  }
  bucket[k] = v;
  this._storage.set(index, bucket);
  this.counter++;
  if(this.counter / this._limit >= 0.5) {
    this.changeSize(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket !== undefined) {
    return bucket[k];
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket) {
    if(bucket[k] === undefined || bucket[k] === null) {
      this.counter--;
    }
    bucket[k] = null;
    this._storage.set(index, bucket);
    if(this.counter / this._limit <= 0.5) {
      this.changeSize(this._limit/2)
    }

  }
};

HashTable.prototype.changeSize = function (newLimit) {
  var newTable = new HashTable(newLimit);
  this._storage.each(function (bucket, index, limArr) {
    for(var k in bucket) {
      newTable.insert(k, bucket[k]);
    }
  });
  this._limit = newLimit
  this._storage = newTable._storage;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


