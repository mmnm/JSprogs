/* Count the distinct elements in every window of size k
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


var countWindowElem = function(collection, k) {
	if(!Array.isArray(collection)) {
		return -1;
	}
	if( (k > collection.length) || (k <= 0) ){
		return -1;
	}

/* My first solution was to have a common hash for the sliding window.
This looks harder to code and more than that harder to debug.
We will use different hashes rather than common hash for the sliding window*/
/*
	//Create a hash which has ref to positions of elems
	var hashObj = {};
	for (var i = 0; i < collection.length; i++) {
		if(collection[i] in hashObj) {
			var temp = [];
			temp.push(hashObj[collection[i]]);
			temp.push(i);
			hashObj[collection[i]] = temp;
		} else {
			hashObj[collection[i]] = i;
		}
	};

	debugger;
	//The window can start at all positions if k < collection.length
	for (var i = 0; i < (collection.length - k + 1); i++) {
		var unique_count = 0;
		for (var j = i; (j < collection.length) && (j < (i + k)); j++) {
			var test = hashObj[collection[j]];
			if(test.length === 1) {
				unique_count++;
			} else if(test.length > 1) {
				var seenCount = 0;
				while(test.length > 0) {
					var popped = test.pop();
					if( (popped >= i) && (popped < (i + k)) ) {
						seenCount++;
					}
				}
				if(seenCount === 1) {
					unique_count++;
				}

			} else {
				console.log("Debug this");
			}
		};
		console.log(unique_count + "\n");
	};
	*/
	var output_arr = [];
	
	for (var i = 0; i < (collection.length - k + 1); i++) {
		var unique_count = 0;
		var slidingHashCount = [];

		for (var j = i; (j < collection.length) && (j < (i + k)); j++) {
			
			if(typeof slidingHashCount[collection[j]] === "undefined") {
				slidingHashCount[collection[j]] = 1;
			} else {
				slidingHashCount[collection[j]]++;
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

