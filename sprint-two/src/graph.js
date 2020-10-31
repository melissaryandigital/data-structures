

// Instantiate a new graph
var Graph = function () {
  this.list = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.list[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.list[node]) { return true; }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {

  if (!this.list[node]) { return; }
  for (var i = 0; i < this.list[node]; i++) {
    this.removeEdge(node, this.list[node][i]);
  }
  delete this.list[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {

  //  if me and melissa freinds are friends on facebook
  for (var i = 0; i < this.list[fromNode].length; i++) {
    if (this.list[fromNode][i] === toNode) { return true; }
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {

  if (!this.list[fromNode] || !this.list[toNode]) { return; } // true or false, truthy or falsey  0 - falsey null falsey undefined are false
  this.list[fromNode].push(toNode); // = [] // this[fromNode] === [4]
  this.list[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {

  if (!this.list[fromNode] || !this.list[toNode]) { return; } // true or false, truthy or falsey  0 - falsey null falsey undefined are false

  for (var i = 0; i < this.list[fromNode].length; i++) {
    if (this.list[fromNode][i] === toNode) { this.list[fromNode].splice(i, 1); }
  }
  for (var i = 0; i < this.list[toNode].length; i++) {
    if (this.list[toNode][i] === fromNode) { this.list[toNode].splice(i, 1); }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {

  for (var key in this.list) {
    cb(key);
  }
};


/* Time Complexity

.addNode = constant
.contains = constant
.removeNode = constant
.hasEdge = linear
.addEdge = constant
.removeEdge = linear
.forEachNode = linear



*/
