

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // - > function
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = [k, v];
  this._storage.set(index, bucket);

  // this._storage.get()
  // this._storage.set()
  // this._storage.set()
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) { return; }
  return this._storage.get(index)[1];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


