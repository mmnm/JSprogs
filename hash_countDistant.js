/*
Count distinct elements in every window of size k
Given an array of size n and an integer k, return the of count of distinct numbers in all windows of size k.

Example:

Input:  arr[] = {1, 2, 1, 3, 4, 2, 3};
            k = 4
Output:
3
4
4
3

Explanation:
First window is {1, 2, 1, 3}, count of distinct numbers is 3
Second window is {2, 1, 3, 4} count of distinct numbers is 4
Third window is {1, 3, 4, 2} count of distinct numbers is 4
Fourth window is {3, 4, 2, 3} count of distinct numbers is 3
*/


var countDistinct = function(collection, k) {
	if(k > collection.length) {
		return -1;
	}
	if(!Array.isArray(collection)) {
		return -1;
	}

	var output_arr = [];
	
	//Create a Hash for first k size and uniqueChar count;
	var hashCount = [];
	var uniqueChar = 0;
	for (var i = 0; i < k; i++) {
		if(collection[i] in hashCount) {
			hashCount[collection[i]]++;
		} else {
			hashCount[collection[i]] = 1;
			uniqueChar++;
		}
	}
	 //First Window result

	//Create a rolling hash and calculate uniqueChar for remaining windows
	for (var i = 0; i <= collection.length - k; i++) {
		output_arr.push(uniqueChar);//Push for this Window
		//Prepare uniqueChar for next Window
		//Substract current character from Hash and add new last char to the Hash
		hashCount[collection[i]]--;
		if(hashCount[collection[i]] <= 0) {
			//Delete this from HashTable
			delete hashCount[collection[i]];
			uniqueChar--;
		}
		//Add new entry i + k entry
		if(i != (collection.length - k)) {
			if(collection[i + k] in hashCount) {
				hashCount[collection[i]]++;
			} else {
				hashCount[collection[i]] = 1;
				uniqueChar++;
			}
		}

	}

	return output_arr;
}



console.log(countDistinct([1, 2, 1, 3, 4, 2, 3], 4));





