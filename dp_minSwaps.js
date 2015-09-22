/* 
Recursive -- Minimum number of swaps required for arranging pairs adjacent to each other

*/


var minSwapsRecursive = function(collection, mapArr) {

	if(!Array.isArray(collection) || !Array.isArray(mapArr)) {
		return "ERROR";
	}


//This hash will be used for storing positions of members
var toMapPos = [];

for (var i = 0; i < collection.length; i++) {
	toMapPos[collection[i]] = i;
};


for (var i = 0; i < collection.length; i++) {
	if(collection[i] in mapArr) {
		mapArr[mapArr[collection[i]]] = collection[i];
	}
};

return minSwapsRecursiveUtil(collection, mapArr, toMapPos, 0, collection.length - 1);

}
var minSwapsRecursiveUtil = function(collection, mapArr, toMapPos, i, n) {

	//Base case
	if(i >= n) {
		return 0;
	}

	//Check for start and start + 1 pos
	if(mapArr[collection[i]] === collection[i + 1]) {
		return minSwapsRecursiveUtil(collection, mapArr, toMapPos, i + 2, n)
	}


	//Now we find  optimized count by swapping i + 1 with pair of i and vice versa
	var swap_pos = toMapPos[mapArr[collection[i]]];
	collection[swap_pos] = collection[i + 1];
	collection[i + 1] = mapArr[collection[i]];

	//Reflect this to toMapPos
	toMapPos[collection[i + 1]] = i + 1;
	toMapPos[collection[swap_pos]] = swap_pos;

	//Recurse the rest with this config 
	var a = minSwapsRecursiveUtil(collection, mapArr, toMapPos, i + 2, n);

	//Backtrack this to make it the same way as it was before
	collection[i + 1] = collection[swap_pos];
	collection[swap_pos] = mapArr[collection[i]];

	//Reflect this to toMapPos
	toMapPos[collection[i + 1]] = i + 1;
	toMapPos[collection[swap_pos]] = swap_pos;



	//Now we find  optimized count by swapping i  with pair of i + 1
	var swap_pos = toMapPos[mapArr[collection[i + 1]]];
	collection[swap_pos] = collection[i];
	collection[i] = mapArr[collection[i + 1]];

	//Reflect this to toMapPos
	toMapPos[collection[i]] = i;
	toMapPos[collection[swap_pos]] = swap_pos;

	//Recurse the rest with this config 
	var b = minSwapsRecursiveUtil(collection, mapArr, toMapPos, i + 2, n);

	//Backtrack this to make it the same way as it was before
	collection[i] = collection[swap_pos];
	collection[swap_pos] = mapArr[collection[i + 1]];

	//Reflect this to toMapPos
	toMapPos[collection[i]] = i;
	toMapPos[collection[swap_pos]] = swap_pos;


	return 1 + Math.min(a,b);



}


//Test cases
var arr = [3, 5, 6, 4, 1, 2];
var arr_hash_map = [];
arr_hash_map[1] = 3;
arr_hash_map[2] = 6;
arr_hash_map[4] = 5;

console.log(minSwapsRecursive(arr, arr_hash_map));

