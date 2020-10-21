var Stack = function () {
  var stack = {};
  stack.storage = {};
  stack.stackSize = 0;

  _.extend(stack, stackMethods);
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
    }
    return this.storage[this.stackSize];
  },
  size: function() {
    return this.stackSize;
  }
};