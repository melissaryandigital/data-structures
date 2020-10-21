class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stackSize = 0;
  }

  push(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  }

  pop() {
    this.stackSize--;

    if (this.stackSize < 0) {
      this.stackSize = 0;
      return this.stackSize;
    }

    var topItem = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return topItem;
  }

  size() {
    return this.stackSize;
  }

}

var stack = new Stack();