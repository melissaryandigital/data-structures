var Queue = function() {

  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.front = 0;
  newInstance.back = 0;
  newInstance.length = 0;
  return newInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};


queueMethods.enqueue = function(value) {

  this.storage[this.back] = value;
  this.length++;
  this.back++;
};

queueMethods.dequeue = function() {

  if (this.length === 0 ) { return; }
  var copy = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.length--;
  return copy;

};

queueMethods.size = function() {
  return this.length;
};


