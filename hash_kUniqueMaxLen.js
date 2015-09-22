/* Find the longest substring with k unique characters in a given string
Given a string you need to print longest possible substring that has exactly 
M unique characters. If there are more than one substring of longest possible 
length, then print any one of them.

"aabbcc", k = 1
Max substring can be any one from {"aa" , "bb" , "cc"}.

"aabbcc", k = 2
Max substring can be any one from {"aabb" , "bbcc"}.

"aabbcc", k = 3
There are substrings with exactly 3 unique characters
{"aabbcc" , "abbcc" , "aabbc" , "abbc" }
Max is "aabbcc" with length 6.

"aaabbb", k = 3
There are only two unique characters, thus show error message. 
*/


var longestSubsWithKUniq = function(collection, k) {

	if(!Array.isArray(collection) || (k <= 0) || (k > collection.length)) {
		console.log("Yo");
		return -1;
	}

	//Make a rolling Hash
	var hashObj = {};
	var maxLen = -1;
	var maxLenStartIndex = -1;
	var locLen = 0;
	var locIndex = 0;

	for (var i = 0; i < collection.length; i++) {

		//We calculate maxLen ending in i of k unique chars
		locLen++;

		if(collection[i] in hashObj) {
			hashObj[collection[i]]++;
		} else {
			hashObj[collection[i]] = 1;
		}

		while (Object.keys(hashObj).length > k) {
				//Reset point, ends in index i, remove from first index untill we 
				//have only <= k unique entries
				hashObj[collection[locIndex]]--;
				if(hashObj[collection[locIndex]] <= 0) {
					delete hashObj[collection[locIndex]];
				}
				locIndex++;
				locLen--;
			}
			
			if(Object.keys(hashObj).length === k) {
				if(maxLen < locLen) {
					maxLen = locLen;
					maxLenStartIndex = locIndex;
				}
			}

		}

		if(!(maxLenStartIndex === -1)) {
			var output_arr = [];
			for(var i = maxLenStartIndex; i < (maxLenStartIndex + maxLen); i++) {
				output_arr.push(collection[i]);
			}
			return output_arr.join('');
		} else {
			return -1;
		}
	}
	

	//Test cases
	console.log(longestSubsWithKUniq("aabbcc".split(''), 1));
	console.log(longestSubsWithKUniq("aabbcc".split(''), 2));
	console.log(longestSubsWithKUniq("aabbcc".split(''), 3));
	console.log(longestSubsWithKUniq("aaabbb".split(''), 3));




