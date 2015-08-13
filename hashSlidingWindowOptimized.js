var countWindowElem = function(collection, k) {
	if(!Array.isArray(collection)) {
		return -1;
	}
	if( (k > collection.length) || (k <= 0) ){
		return -1;
	}

	var output_arr = [];
	var slidingHashCount = [];

	for (var i = 0; i < (collection.length - k + 1); i++) {
		var unique_count = 0;
		
		if(i === 0) {
			for (var j = i; (j < collection.length) && (j < (i + k)); j++) {

				if(typeof slidingHashCount[collection[j]] === "undefined") {
					slidingHashCount[collection[j]] = 1;
				} else {
					slidingHashCount[collection[j]]++;
				}
			}
		} else {
			//Remove previous sliding element(first) from Hash 
			//and add new entry(new window last)

			/*Remove previous sliding window's first element,
			as it no longer is part of new window */
			slidingHashCount[collection[i - 1]]--;

			/*Add new sliding window's last element,
			as it is part of new window now*/
			if(typeof slidingHashCount[collection[i + k - 1]] === "undefined") {
				slidingHashCount[collection[i + k - 1]] = 1;
			} else {
				slidingHashCount[collection[i + k - 1]]++;
			}
			

		}
		for (var j = i; (j < collection.length) && (j < (i + k)); j++) {
			if(slidingHashCount[collection[j]] === 1) {
				unique_count++;
			}
		}
		if(unique_count != k) {
			unique_count++;
		}
		output_arr.push(unique_count);
	}

	return output_arr;
}

var input_arr = [1, 2, 1, 3, 4, 2, 3];
var some_arr = [1,1,2,1,3,2];

console.log(countWindowElem(input_arr,4));
console.log(countWindowElem(some_arr,4));
console.log(countWindowElem(some_arr,2));
