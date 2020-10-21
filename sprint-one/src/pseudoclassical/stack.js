var Stack = function() {
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function () {
  this.stackSize--;

  if (this.stackSize < 0) {
    this.stackSize = 0;
    return this.stackSize;
  }

  var topItem = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return topItem;
};

Stack.prototype.size = function () {
  return this.stackSize;
};


