/*Longest Consecutive Subsequence
Given an array of integers, find the length of the longest sub-sequence such that 
elements in the subsequence are consecutive integers, the consecutive numbers 
can be in any order.

Examples

Input: arr[] = {1, 9, 3, 10, 4, 20, 2};
Output: 4
The subsequence 1, 3, 4, 2 is the longest subsequence
of consecutive elements

Input: arr[] = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42}
Output: 5
The subsequence 36, 35, 33, 34, 32 is the longest subsequence
of consecutive elements. */


var longestSubseq = function(collection) {
	if(typeof collection === "undefined" || !Array.isArray(collection)) {
		return -1;
	} 
	var hashCount = [];
	if(collection.length === 1) {
		return 1;
	}

	for (var i = 0; i < collection.length; i++) {
		if(collection[i] in hashCount) {
			hashCount[collection[i]]++;
		} else {
			hashCount[collection[i]] = 1;
		}
	};

	//Now find max sequence
	var maxSeq;
	var prev;
	var locCount;
	var ck = 0;

	for(var j in hashCount) {
		if(ck === 0) {
			prev = j;
			locCount = 1;
			maxSeq = 1;
			ck = 1;
			continue;
		}
		if((j - prev) === 1) {
			locCount++;

			if(maxSeq < locCount) {
				maxSeq = locCount;
			}
		} else {
			locCount = 1;	
		}
		prev = j;
	}
	return maxSeq;
}


console.log(longestSubseq([1, 9, 3, 10, 4, 20, 2]));
console.log(longestSubseq([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]));



