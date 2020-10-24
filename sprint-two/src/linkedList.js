var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    if (list.head === null && list.tail === null ) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      var currentNode = list.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      list.tail = newNode; // value (passed): next = undefine d
    }
  };

  list.removeHead = function() {
    console.log(list.head.next);
    if (list.head === null) {
      return;
    } else {
      var copy = list.head;
      list.head = list.head.next;
      return copy.value;
    }
  };

  list.contains = function(target) {

    var currentNode = list.head;

    //   while (currentNode !== null) {
    //     if ( currentNode.value === target) { return true; }
    //   }
    //   // iterate through the linked list
    //   // check if node.value === target
    //   // if they match return true;


    //   return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */