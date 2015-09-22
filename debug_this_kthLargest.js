/* Find kth large element in unsorted array */

var findIElem = function(collection, start, end, k) {
	if( (k < 0) || (k > collection.length) ) {
		return "NONE";
	}
	if(start > end) {
		return "NONE";
	}
	var output;

	var p = partition(collection, start, end);
	if(p < 0) {
		return "NONE";
	}

	if(p === (k - 1)) {
		return collection[p];
	} else if( p < (k - 1)) {
		output = findIElem(collection, p + 1, end, k);
	} else {
		output = findIElem(collection, start, p - 1, k);
	}

	return output;

}

var partition = function(collection, start, end) {
	if(start > end) {
		return -1;
	}
	if(start === end) {
		return start;
	}
	
	//Select a random index for swap 
	var swapIndex = Math.floor((Math.random() * end) + start);
	if( (swapIndex > end) || (swapIndex < start) ) {
		swapIndex = start;
	} 
	
	//Swap start elem with swapIndex
	var temp = collection[start];
	collection[start] = collection[swapIndex];
	collection[swapIndex] = temp;

	//partion based on start elem
    var partElem = collection[start];
    var j = start;

	for (var i = start + 1; (i <= end) && (i < collection.length) ; i++) {
		if(collection[i] < partElem) {
			temp = collection[j + 1];
			collection[j + 1] = collection[i];
			collection[i] = temp;
			j++;
		}
	};
	//last swap for putting the partioned elem in correct location
	temp = collection[j];
	collection[j] = collection[start];
	collection[start] = temp;

	//Return the index of partitioned elem
	return j;

}

//1,2 3,4,5,6,7,9,11,14
console.log(findIElem([7,2,6,4,3,9,5,11,1,14], 0, [7,2,6,4,3,9,5,11,1,14].length - 1, 3));
