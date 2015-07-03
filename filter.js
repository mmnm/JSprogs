/*
_.filter([4, 5, 6], function(n) {
  return n % 2 == 0;
});
// → [4, 6]
*/

function filter(collection, callback){
	var output_arr = [];
	collection.forEach(function(var1){
		if(callback(var1))
			output_arr.push(var1);
	});
	return output_arr;
}

var abc = [4, 5, 6, 8];

function isEven(var1){
	return (var1 % 2 === 0);
}

function isOdd(var1){
	return (var1 % 2 !== 0);
}

console.log(filter(abc, isEven));
console.log(filter(abc, isOdd));
