/*
Given two string Str1 and Str2, Find whether any anagram of Str2 is a 
sub-string of string Str1 (Case Insensitive) then return 
True otherwise False. 
Test case :if Str1 = Amazon and Str2 = omaz, Output: True
*/


var isAnagram = function(str1, str2) {
	if(typeof str1 == "undefined" || typeof str2 == "undefined") {
		return false;
	}

	if((str1.length < str2.length) ||(str1.length === 0) || (str2.length === 0)) {
		return false;
	}

	//Create hash for str1
	var hashStr1 = {};
	for (var i = 0; i < str1.length; i++) {
		if(str1[i] in hashStr1) {
			hashStr1[str1[i]]++;
		} else {
			hashStr1[str1[i]] = 1;
		}
	}

	//Substract hash on check from str2. If at any point char is not found 
	//or negative then return false;

	for (var i = 0; i < str2.length; i++) {
		if(str2[i] in hashStr1) {
			hashStr1[str2[i]]--;
			if(hashStr1[str2[i]] < 0) {
				return false;
			}
		}  else {
			return false;
		}
	}
	//At this point this shuld return as true as str2 all elems 
	//were found in str1 hash

	return true;
}


//Test cases
console.log(isAnagram("Amazon".split(''), "omaz".split('')));
console.log(isAnagram("Amazon".split(''), "whyis".split('')));



