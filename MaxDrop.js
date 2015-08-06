/*Find Max drop in an array, given second elem comes after first one*/


var maxDrop = function(inputArr) {
	if( (typeof inputArr === "undefined") || !(Array.isArray(inputArr)) ) {
		return -1;
	}

	var maxSum = -1;
	var minSeen = inputArr[0];

	for (var i = 1; i < inputArr.length; i++) {
		if( maxSum < (inputArr[i] - minSeen) ) {
			maxSum = inputArr[i] - minSeen;
		}
		if(minSeen > inputArr[i]) {
			minSeen = inputArr[i];
		}
	};

	return maxSum;
};

console.log(maxDrop([2,5,3,9,1,10,4]));
console.log(maxDrop("dd"));
console.log(maxDrop([]));

