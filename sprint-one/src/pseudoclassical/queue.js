var Queue = function() {
  this.storage = {};
  this.queueSize = 0;
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.tail] = value;
  this.queueSize++;
  this.tail++;
};

Queue.prototype.dequeue = function () {
  if (this.queueSize === 0 ) {
    return this.queueSize;
  }

  var firstInQueue = this.storage[this.head];
  delete this.storage[this.head];

  this.head++;
  this.queueSize--;

  return firstInQueue;
};

Queue.prototype.size = function () {
  return this.queueSize;
};

var queue = new Queue();