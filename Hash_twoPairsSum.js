/* Find a pair (two numbers) in array whose sum equals the input total

E.g, [1,7,9], 10 returns [1,9]
     [1,7,9], 8  returns [1,7]
     [1,7,9], 9  returns NONE
     */


var pairSum = function(collection, total) {
	if(!Array.isArray(collection)) {
		return "NONE";
	}
	var output = [];

	//Create hash table for total - i, 
	//and if it equals to any new i we found our pair
	
	var hashDiff = [];
	for (var i = 0; i < collection.length; i++) {
		//if i is in hashDiff, it means we found outr pair and return it
		if(collection[i] in hashDiff) {
			output.push(total - collection[i]);
			output.push(collection[i]);
		} else if((total - collection[i]) in hashDiff) {
			hashDiff[total - collection[i]]++;
		} else {
			hashDiff[total - collection[i]] = 1;
		}
	};

	if(output.length === 0) {
		return "NONE";
	} else {
		return output;
	}

}   

console.log(pairSum([1,7,9], 10));
console.log(pairSum([1,7,9], 8));
console.log(pairSum([1,7,9], 9));
