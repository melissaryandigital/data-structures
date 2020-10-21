var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.stackSize = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  pop: function() {
    this.stackSize--;

    if (this.stackSize < 0) {
      this.stackSize = 0;
      return this.stackSize;
    }

    var topItem = this.storage[this.stackSize];
    delete this.storage[this.stacksize];
    return topItem;
  },
  size: function() {
    return this.stackSize;
  }

};
