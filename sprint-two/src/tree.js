var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newTree = new Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function (target) {

  for (var i = 0; i < this.children.length; i++) {

    if (this.children[i].value === target) {
      return true;
    }
    if (this.children[i].contains(target) === true) {
      return true;
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
