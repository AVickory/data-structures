

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if(this.nodes[node] === undefined) {
    this.nodes[node] = [];
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.nodes;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    var neighbors = this.nodes[key];
    this.nodes[key] = neighbors.filter(function (item) {
      return item !== node;
    });
  }
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(!this.contains(fromNode)) {
    return false;
  } else {
    return this.nodes[fromNode].indexOf(toNode) !== -1;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)) {
    var fromIndex = this.nodes[fromNode].indexOf(toNode);
    var toIndex = this.nodes[toNode].indexOf(fromNode);
    if(fromIndex !== -1) {
      this.nodes[fromNode].splice(fromIndex, 1);
    }
    if(toIndex !== -1) {
      this.nodes[toNode].splice(toIndex, 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 AddNode: O(1)
 contains: O(1)
 removeNode: O(n^2)
 hasEdge: O(n)
 addEdge: O(1)
 removeEdge: O(n)
 forEachNode: O(n)


 */


