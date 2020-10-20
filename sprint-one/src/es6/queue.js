class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.length = 0;
    this.start = 0;
    this.end = 0;
    this.storage = {};
  }

  enqueue(value) {

    this.storage[this.end] = value;
    this.end++;
    this.length++;
  }

  dequeue() {
    if (this.length === 0 ) { return; }
    var copy = this.storage[this.start];
    this.start++;
    this.length--;
    return copy;
  }

  size() {
    return this.length;
  }

}

var newQueue = new Queue();
