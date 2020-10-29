var BinarySearchTree = function(value) {

  var bst = {};

  bst.value = value;
  bst.left = null;
  bst.right = null;

  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};

//

// oldTree.insert(value)
bstMethods.insert = function(value) {

  // Create new node
  var newBST = BinarySearchTree(value);

  // newBSt = {value: value, left: null, right: null}

  // this.left.left > newBst.value

  // Comparing value of new obj to 'this' (binarySearchTree)
  if (newBST.value < this.value) {
    // newBst < this.left.value
    // Traverse left
    if (this.left === null) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else if (newBST > this.value) {
    // else if greater than
    if (this.right === null) {
      this.right = newBST;
    }
  } else {
    // if they are equal
    return;
  }

  // Check if this.left is null
  // If the value of newBST < this.value
  // Assign it to that position

};

bstMethods.contains = function(value) {

};

bstMethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

