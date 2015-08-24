/* Given array with some numbers and known that all except one number occurs even number of times
Find the number . If you can't find such number , then return -1

E.g., [4,7,2,2,5,3,5,7,3,7,4,5] 
output = 7
*/


var findOddOccurence = function(collection){
	if(!Array.isArray(collection)) {
		return -1;
	}

	var hashCount = {};
	
	for (var i = 0; i < collection.length; i++) {
		if(typeof hashCount[collection[i]] === "undefined") {
			hashCount[collection[i]] = 1;
		} else {
			hashCount[collection[i]]++;
		}
	};

	for(var j in hashCount) {
		if(hashCount[j] % 2) {
			return j;
		}
	}

	return -1;
}


console.log(findOddOccurence([4,7,2,2,5,3,5,7,3,7,4]));


