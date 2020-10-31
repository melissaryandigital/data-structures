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
// ()
  // o (n())
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

treeMethods.forEach = function (cb) {
  // iterate through the entire tree
  for ( var i = 0; i < this.children.length; i++) {
    cb(this.children[i].value);
    this.children[i].forEach(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addChild = constant (because adding it to last index, no searching)
 .contains = exponential
 */
