var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
    length++;
  };

  someInstance.dequeue = function() {
    if (length === 0) { return; }
    var copy = storage[front];
    delete storage[front];
    front++;
    length--;
    return copy;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
