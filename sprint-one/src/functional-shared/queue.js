var Queue = function () {

  var queue = {};

  queue.storage = {};
  queue.head = 0;
  queue.tail = 0;
  queue.length = 0;

  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.tail] = value;
    this.tail++;
    this.length++;
  },
  dequeue: function () {
    if (this.length === 0) {
      return 0;
    }
    var first = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.length--;
    return first;
  },
  size: function () {
    return this.length;
  }
};
