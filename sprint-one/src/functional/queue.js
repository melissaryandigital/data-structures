var Queue = function () {
  var someInstance = {};

  var tail = 0;
  var head = 0;
  var size = 0;

  var storage = {};

  someInstance.enqueue = function (value) {
    storage[tail] = value;
    tail++;
    size++;
  };

  someInstance.dequeue = function () {
    if (size === 0) {
      return 0;
    }

    var data = storage[head];
    delete storage[head];
    head++;
    size--;
    return data;
  };

  someInstance.size = function () {
    return size;
  };

  return someInstance;
};