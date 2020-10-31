var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item)) { return; } // -> linear operation
  this._storage.push(item); // -> constant operation
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) { // -> linear
    if (this._storage[i] === item) { return true; } // -> not calculated
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage.splice(this._storage.indexOf(item), 1); // -> linear operation
};

/*
 * Complexity: What is the time complexity of the above functions?
.add = linear
.contains = linear
.remove = linear

Could have been constant if we used obj- MELISSA'S FAULT
 */
