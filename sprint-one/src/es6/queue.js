class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.queueSize = 0;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.queueSize++;
    this.tail++;
  }

  dequeue() {
    if (this.queueSize === 0) {
      return 0;
    }

    this.queueSize--;
    var firstInQueue = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return firstInQueue;
  }

  size() {
    return this.queueSize;
  }

}

var queue = new Queue();
