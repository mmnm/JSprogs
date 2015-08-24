/*  In a string detect the smallest window length with highest number of 
distinct characters. For eg.
A = “aabcbcdbca”, then ans would be 4 as of “dbca”
*/


var longestDistinctChars = function(collection) {
	
	if(collection.length <= 1) {
		return collection.length;
	}
	
	var bestSoFar = 1;
	for (var i = 1; i < collection.length; i++) {
		var bestEndingI = 0;
		var hashBestCount = [];
		//Best count ending in 'i' index
		for (var j = i; j >= 0; j--) {
			if(typeof hashBestCount[collection[j]] ==="undefined") {
				bestEndingI++;
				hashBestCount[collection[j]] = 1;
			} else {
				break;
			}
		};
		if(bestSoFar < bestEndingI) {
			bestSoFar = bestEndingI;
		}
	};
	return bestSoFar;
}

console.log(longestDistinctChars("aabcbcdbca"));
console.log(longestDistinctChars("aabczltubcdbca"));
console.log(longestDistinctChars("abcdeaaaaabcbcdbca"));



