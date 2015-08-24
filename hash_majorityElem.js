/* Majority element 
A majority element in an array A[] 
of size n is an element that appears more than n/2 times 

Write a function which takes an array and emits the majority element (if it exists), 
otherwise prints NONE as follows
I/P : 3 3 4 2 4 4 2 4 4
       O/P : 4 

       I/P : 3 3 4 2 4 4 2 4
       O/P : NONE

       */


var majorityElem = function(collection) {
	
	if(!Array.isArray(collection)) {
		return "NONE";
	}
	var hashCount = [];
	var maxCount = {};
	maxCount.index = 0;
	maxCount.items = 1;

	for (var i = 0; i < collection.length; i++) {
		if(typeof hashCount[collection[i]] === "undefined") {
			hashCount[collection[i]] = 1;
		} else {
			hashCount[collection[i]]++;
			if(maxCount.items < hashCount[collection[i]]) {
				maxCount.index = i;
				maxCount.items = hashCount[collection[i]];
			}
		}
	};
	

	if( maxCount.items > (collection.length / 2) ) {
		return collection[maxCount.index];
	} else {
		return "NONE";
	}
	

}

console.log(majorityElem([3,3,4,2,4,4,2,4,4]));
console.log(majorityElem([3,3,4,2,4,4,2,4]));
