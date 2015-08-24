/*Given an unsorted array of size n. Array elements are in range from 1 to n. 
One number from set {1, 2, …n} is missing 
and one number occurs twice in array. Find these two numbers.

Examples:

  arr[] = {3, 1, 3}
  Output: 2, 3   // 2 is missing and 3 occurs twice 

  arr[] = {4, 3, 6, 2, 1, 1}
  Output: 1, 5  // 5 is missing and 1 occurs twice 

  */

var missing = function(collection) {
	if(!Array.isArray(collection)) {
		return -1;
	}
	//Create Hash of occurences
	var countHash = {};

	for (var i = 0; i < collection.length; i++) {
		if(collection[i] in countHash) {
			countHash[collection[i]]++;
		} else {
			countHash[collection[i]] = 1;
		}
	}

	var output_arr = [];
	var prev = -1;
	for(var j in countHash) {
		if(countHash[j] > 1) {
			output_arr.push(parseInt(j));
		}
		if(prev != -1) {	
			if((parseInt(j) - prev) != 1) {
				output_arr.push(parseInt(j) - 1);
			}
		}
		prev = parseInt(j);
	}

	return output_arr;

}


//Test cases
console.log(missing([3, 1, 3]));
console.log(missing([3, 1, 3,3,3]));
console.log(missing([4, 3, 6, 2, 1, 1]));



