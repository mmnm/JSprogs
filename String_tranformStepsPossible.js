/*
Transform One String to Another using Minimum Number of Given Operation
Given two strings A and B, the task is to convert A to B if possible. The only operation allowed is to put any character from A and insert it at front. Find if it’s possible to convert the string. If yes, then output minimum no. of operations required for transformation.

Input:  A = "ABD", B = "BAD"
Output: 1
Explanation: Pick B and insert it at front.

Input:  A = "EACBD", B = "EABCD"
Output: 3
Explanation: Pick B and insert at front, EACBD => BEACD
             Pick A and insert at front, BEACD => ABECD
             Pick E and insert at front, ABECD => EABCD
             */




var transformString = function(original, transformed) {
	if( (original.length <= 0) || (transformed.length <= 0) || 
		(original.length != transformed.length) ) {
		return -1;
	}

	//Length are same , now compare first if transformation is possible
	var hashOrig = [];
	for (var i = 0; i < original.length; i++) {
		if(original[i] in hashOrig) {
			hashOrig[original[i]]++;
		} else {
			hashOrig[original[i]] = 1;
		}
	}
	var differ = false;
	for (var j = 0; j < transformed.length; j++) {
		if(transformed[j] in hashOrig) {
			hashOrig[original[j]]--;
		} else {
			differ = true;
			break;
		}
	}

	for(var k in hashOrig) {
		if(hashOrig[k] != 0) {
			differ = true;
			break;
		}
	}

	if(differ === true) {
		return -1;
	}

	//Actual tranformation is possible, find minimum steps, 
	//start matching each char from last till it matches
	// and rotate one before
	var totalSteps = 0;
	for (var i = transformed.length - 1; i >= 0; i--) {
		var testElem = transformed[i];
		while( (original[i] != testElem) ) {
			var removed = original.splice(i, 1);
			original.unshift(removed);
			totalSteps++;
		}

	};

	return totalSteps;

}


//Test cases

console.log(transformString("abcd".split(''), "fghi".split('')));
console.log(transformString("abc".split(''), "abcd".split('')));
console.log(transformString("ABD".split(''), "BAD".split('')));
console.log(transformString("EACBD".split(''), "EABCD".split('')));




