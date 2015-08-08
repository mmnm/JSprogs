/* 
Given an unsorted array of size n. Array elements are in range from 1 to n. 
One number from set {1, 2, …n} is missing and one number occurs twice in array. 
Find these two numbers.

Examples:

  arr[] = {3, 1, 3}
  Output: 2, 3   // 2 is missing and 3 occurs twice 

  arr[] = {4, 3, 6, 2, 1, 1}
  Output: 1, 5  // 5 is missing and 1 occurs twice 
  */

  /* There are two ways ... 1 use sort ( O(nlog)  + O(n)) and then compare consecutive 
  numbers to find this
  Tree BST O(nlogn) + inorder O(n)
  2nd solution - Use hash O(n) solution
  */


  var missDup = function(collection) {
  	if(!Array.isArray(collection)) {
  		return -1;
  	}
  	var isSeenCount = [];
  	var high = collection[0];
  	var low = collection[0];

  	for (var i = 0; i < collection.length; i++) {
  		if(isSeenCount[collection[i]]) {
  			isSeenCount[collection[i]] = isSeenCount[collection[i]] + 1;
  		} else {
  			isSeenCount[collection[i]] = 1;
  		}
  		if(collection[i] < low) {
  			low = collection[i];
  		}
  		if(collection[i] > high) {
  			high = collection[i];
  		}
  	};
  
  	var outputArr = [];
  	for (var i = low; i <= high; i++) {
  		if(typeof isSeenCount[i] === "undefined") {
  			outputArr.push(i);
  		} else if(isSeenCount[i] > 1) {
  			
  			outputArr.push(i);	
  			dupHasbeenput = true;
  			
  		}
  	}

  	return outputArr;
}


console.log(missDup([3, 1, 3]));
console.log(missDup([4, 3, 6, 2, 1, 1]));


/* What did we learn while debugging?
1. Please be careful of what you are outputting from the hash, 
is it the value or the index ?
2. Pay special attention to start values e.,g low = high was earlier = 0, 
which was incorrect. 
3. Please double check the start/end values of a for loop for the given array
*/



