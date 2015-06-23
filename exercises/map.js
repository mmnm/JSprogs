
/* Map implementation */
/* Map takes an array and trasforms the array with the callback provided 
Example input : array [2, 4, 6] , function multiply3(var1) { return var1 * 3 } --> output is array [ 6. 12, 18]

Constraint - Can not use library function and for lop directly in map ( implememt your own foreach)
*/

function multiply3(number){
	return number * 3; 
}

function each(collection, callback){
	for (var i = 0; i < collection.length; i++) {
		callback(collection[i]);
	};
}
function map (collection, callback) {
	// body...
	var outputArr = [];
	each(collection, function(var1){
		outputArr.push(callback(var1));
	});
	return outputArr;
}

var abc = [2, 4, 9];
console.log(map(abc, multiply3));



