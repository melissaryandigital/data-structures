var Queue = function() {

  this.storage = {};
  this.length = 0;
  this.front = 0;
  this.back = 0;


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.length++;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) {return; }
  var copy = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.length--;
  return copy;
};

Queue.prototype.size = function() {
  return this.length;
};

var newQueue = new Queue;
