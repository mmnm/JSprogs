
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

function zip_using_map_demo(collection1, collection2){
	var output = [];
	output = map(collection1, function(i){
		return [collection1[i], collection2[i]];
	});

	return output;
}

var var1_zip = [1,2,3];
var var2_zip = [5,6,7];
console.log(zip_using_map_demo(var1_zip,var2_zip));




