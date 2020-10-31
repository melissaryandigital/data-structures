var BinarySearchTree = function (value) {

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
bstMethods.insert = function (value) {

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
  } else if (newBST.value > this.value) {
    // else if greater than
    if (this.right === null) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  } else {
    // if they are equal
    return;
  }
};


bstMethods.contains = function (value) {

  //if ( this === null) { return; }
  if (this.value === value) { return true; }
  if (this.value < value) {
    if (this.right) {
      if (this.right.value === value) {
        return true;
      } else {
        this.right.contains(value);
      }
      // this.right !== null
    }
    // meaning value is bigger
    // go right
  } else if (this.value > value) {
    if (this.left) {
      if (this.left.value === value) {
        return true;
      } else {
        this.left.contains(value);
      }
      // this.left !== null

    }
    //meaning value is smaller
    // go left

  }
  return false;
};

bstMethods.depthFirstLog = function (cb) {
  // visit every node
  cb(this.value);
  if (this.left) { this.left.depthFirstLog(cb); }
  if (this.right) { this.right.depthFirstLog(cb); }

  // constant + constant = constant
  // n + n === linear
};

/*
 * Complexity: What is the time complexity of the above functions?

 .insert = constant
 .contains = constant
 .depthFirstLog = constant

 */

