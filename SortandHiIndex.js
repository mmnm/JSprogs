/* Find h - index
For example, if we have a researcher with 5 publications A, B, C, D, and E with 10, 8, 5, 4, and 3 citations, respectively, the h index is equal to 4 because the 4th publication has 4 citations and the 5th has only 3. On the contrary if the same publications have 25, 8, 5, 3, and 3, then the index is 3 because the fourth paper has only 3 citations.

f(A)=10, f(B)=8, f(C)=5, f(D)=4, f(E)=3　→ h-index=4
f(A)=25, f(B)=8, f(C)=5, f(D)=3, f(E)=3　→ h-index=3

*/



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



var qSort = function(collection, start, end) {
	

	if(!Array.isArray(collection)) {
		return collection;
	} 
	if(start >= end) {
		return collection;
	}
	var p = partition(collection, start, end);
	if(p != -1) {
		qSort(collection, start, p - 1);
		qSort(collection, p + 1, end);
	}

	return collection; 
}

var hIndex = function(collection) {
	
	//Descending order
	for (var i = 0; i < (collection.length)/ 2; i++) {
		var temp = collection[i];
		collection[i] = collection[collection.length - 1 - i];
		collection[collection.length - 1 - i] = collection[i];
	};

	for (var j = 0; j < collection.length; j++) {
		if(collection[j] < (j + 1))
			return j;
	};

	return -1;
}

console.log(hIndex([10,8,5,4,3]));
console.log(hIndex([25,8,5,3,3]));
console.log(hIndex([0,3,4,7,8,9,10]));

console.log(qSort([3,9,2,7,1,4,11,8], 0, [3,9,2,7,1,4,11,8].length - 1));
console.log(qSort([3,9,2,7], 0, [3,9,2,7].length - 1));








//printArr([1,2,3,4]);