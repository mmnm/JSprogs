/*
* Take a string as input and find the longest sequence of the same character.
* Return as your result an array with the position of the first and last character in the sequence.
* Example "aabbbccccdde" returns [5,8]
*/

function longestSeq(input) {

	if(input.length === 0)
		return [-1, -1];

	//Keepe track of longest sequence start index location and length 

	var best_start_index = 0;
	var best_length = 0;

	var prev = 0;
	var prev_length = 0;
	for(var i = 0; i < input.length; i++) {

		if(prev === 0) {
			prev = input[i];
			prev_length = 1;
			//continue;
		} else {
	
			if(prev === input[i]) {
				prev_length++;
			} else {
				prev = input[i];
				prev_length = 1;
			}
		}

		if(best_length < prev_length) {
			best_length = prev_length;
			best_start_index = prev;
		}
		
	}

	return [best_start_index, best_length];
}






//Input array
var input = [];

input = prompt("Enter input array of characters");

var output = longestSeq(input);

console.log(output);


