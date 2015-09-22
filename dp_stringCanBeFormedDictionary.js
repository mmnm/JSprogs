/*Given a set of words as dictionary, find out whether a given string can be 
formed 
using any permutation of the words from the dictionary. The words given in the 
dictionary cannot be altered, more specifically anagrams of the given words 
cannot 
be used to form the given string,
*/

var inDict = function(collection) {
	var dictionary = {"sun":1, "sam":1, "sung":1, "s":1};
	if(collection in dictionary) {
		return true;
	} else {
		return false;
	}

}

var canBeFormed = function(str) {
	//If empty string
	var cachedResult = {};

	var cachedFunc = function(str) {

		
		if(str.length <= 0) {
			return true;
		}

		var start = 0;
		while(start < str.length) {
			var strTillNow = str.substr(0, start + 1);
			if(inDict(strTillNow)) {
				if(canBeFormed(str.substr(start + 1, str.length - (start + 1)))) {
					cachedResult[str] = true;
					return true;
				}
			}
			start++
		}
		return false;
	};
	if(!str in cachedResult) {
		cachedResult[str] = cachedFunc.apply(this, arguments);
	} else { 
		console.log("Returning cached result");
	}
	return cachedFunc(str);
	
}

console.log(canBeFormed("sungsams"));
console.log(canBeFormed("sungsam"));
console.log(canBeFormed("sungmanu"));
console.log(canBeFormed("sungsams"));
console.log(canBeFormed("sungsam"));
console.log(canBeFormed("sungmanu"));

