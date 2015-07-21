/*
_.reduce([1, 2], function(total, n) {
  return total + n;
});
// → 3*/

var each = function(collection, callback){
//
    if(Array.isArray(collection)) {
      
      for(var i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if(typeof collection === "object") {
      
      for(var j in collection) {
        callback(collection[j]);
      }
    } else {
      console.log("Debug error");
    }

};

function reduce(collection, accumulator, callback){
	if(!typeof callback === "function")
		return "Error";

	each(collection, function(var1){
		accumulator = callback(accumulator, var1);
	})
	return accumulator;
}

console.log(reduce([3, 2], 13, function(total, n) {
  return total * n;
}));
