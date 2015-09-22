/*
swaps required for arranging pairs adjacent to each other

*/


var minSwaps = function(collection, mapArr) {

	if(!Array.isArray(collection) || !Array.isArray(mapArr)) {
		return "ERROR";
	}


//This hash will be used for storing positions of members
var toMapPos = [];

for (var i = 0; i < collection.length; i++) {
	toMapPos[collection[i]] = i;
};

var reverseMap = [];
for (var i = 0; i < collection.length; i++) {
	if(collection[i] in mapArr) {
		reverseMap[mapArr[collection[i]]] = collection[i];
	}
};



var countSwaps = 0;

for (var i = 0; i < collection.length - 1; i+= 2) {
	var test = collection[i];
	var pair_elem = 0;
	
	if(test in mapArr) {
		pair_elem = mapArr[test];
	} else if(test in reverseMap) {
		pair_elem = reverseMap[test];
	} else {
		return "DEBUG ERROR";
	}

	if(pair_elem != collection[i + 1]) {
		//Find the pos of pair elem and swap elems of i + 1 with pair pos
		//Increment countSwaps
		var pair_pos = toMapPos[pair_elem];
		collection[pair_pos] = collection[i + 1];
		collection[i + 1] = pair_elem;

		//Also update toMapPos to reflect these changes
		toMapPos[pair_elem] = i + 1;
		toMapPos[collection[pair_pos]] = pair_pos;
		countSwaps++;

	}

}
return countSwaps;

}



//Test cases
var arr = [3, 5, 6, 4, 1, 2];
var arr_hash_map = [];
arr_hash_map[1] = 3;
arr_hash_map[2] = 6;
arr_hash_map[4] = 5;

console.log(minSwaps(arr, arr_hash_map));



