/*
_.reduce([1, 2], function(total, n) {
  return total + n;
});
// → 3*/

function reduce(collection, accumulator, callback){
	if(!typeof callback === "function")
		return "Error";

	collection.forEach(function(var1){
		accumulator = callback(accumulator, var1);
	})
	return accumulator;
}

console.log(reduce([1, 2], 13, function(total, n) {
  return total * n;
}));
