var Stack = function () {
  var someInstance = {};
  var size = 0;
  var storage = {};

  someInstance.push = function (value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function () {
    if (size === 0) {
      return 0;
    }

    size--;
    var value = storage[size];
    delete storage[size];
    return value;
  };

  someInstance.size = function () {
    return size;
  };

  return someInstance;
};