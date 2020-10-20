var Queue = function() {

  var newInstance = {};
  newInstance.storage = {};
  newInstance.length = 0;
  newInstance.front = 0;
  newInstance.back = 0;

  _.extend(newInstance, queueMethods);
  return newInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {

  this.storage[this.back] = value;
  this.back++;
  this.length++;
};

queueMethods.dequeue = function() {

  if (this.length === 0) { return; }
  var copy = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.length--;
  return copy;
};

queueMethods.size = function() {
  return this.length;
};