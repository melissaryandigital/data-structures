var Stack = function() {

  var newInstance = Object.create(stackMethods);
  newInstance.length = 0;
  newInstance.storage = {};


  return newInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if ( this.length === 0 ) { return; }
  var copy = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return copy;
};

stackMethods.size = function() {
  return this.length;
};




