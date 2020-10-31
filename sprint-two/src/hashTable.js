
var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // - > function
};

HashTable.prototype.insert = function (k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [k, v];
  var somethingAtIndex = this._storage.get(index);
  // test if nothing is at index
  if (!somethingAtIndex) {
    // if nothing is there add something
    this._storage.set(index, bucket);
  } else {
    // if keys are the same
    if (somethingAtIndex[0] === k) {
      // update value
      this._storage.set(index, bucket);
      // if keys are different
    } else {

      // this._storage.set(index, [somethingAtIndex, bucket]);
      // if index[0] === array   -> [ [key,value], [key,value] ]
      // array[0] !== array  [key,value]  ->  'string'
      if (Array.isArray(this._storage.get(index)[0])) {
        // if array[0] === array ->push new bucket in
        // 0th -> array -> [ [][] ]
        // bucket - > [key,value]
        //this._storage.get  return value - > [ [key.value] ]
        this._storage.get(index).push(bucket); // -> [ [key,value] ].push(bucket) - > [ [key,value], [key,value]]
        // [ [key,value], [key,value ] ];  -> .push  [ [key,value], [key,value ], [key,value] ]
      } else {
        // will only enter if index  === [key,value]
        // if array[0] !== array  set index value - > [ [key,value], [key,value] ]
        this._storage.set(index, [somethingAtIndex, bucket]);
      }
    }
  }

};

HashTable.prototype.retrieve = function (k) {

  // k - > skateboard
  // index - > 4
  // k -> anything
  // index -> 4

  // [ ['key = skateboard',  value = 'skateboard'],[key = 'anything', value = anything ]]
  // index === 4

  var index = getIndexBelowMaxForKey(k, this._limit);

  // edge case - X

  if (!this._storage.get(index)) { return; }

  var itemAtIndex = this._storage.get(index);
  // if index is nested  - > [ [key, value],[key, value]]
  if (Array.isArray(itemAtIndex[0])) {
    // iterate over bucket for i - >
    for (var tuple of itemAtIndex) { // itemAtIndex - > bucket
      // if bucket[0] -> key === k
      if (tuple[0] === k) {
        // - > key
        return tuple[1];
      }
    }

  } else {
    // if index is not nested

    return this._storage.get(index)[1];

  }


};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

HashTable.prototype.forEach = function (func) {
  console.log('entering');
  this._storage.each( function (value, idx, container) {
    func(value);
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
.insert = constant
.retrieve = constant
.remove = constant

 */


