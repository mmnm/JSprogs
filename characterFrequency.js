/*
 *  Write a function that takes as its input a string and returns an array of 
 *  arrays showing the frequency of characters.
 *  
 *  
 *       :: Example ::
 *  
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *  
 *  [['i', 4],['s', 4],['p', 2],['m', 1]]
 */

function freqChars(input) {

	if(input === 0)
		return 0;

	var counters = {};

	for(var i = 0; i < input.length; i++) {
		var temp = input[i];
		
		if(counters[temp] === 0) {
			temp = 1;
		} else {
			temp++;
		}
	}
	//At this point counters object will have index char and count;

	var output_array = [];
	for(var i in counters) {
		var temp_array = i + ',' + counters[i];
		output_array.push(temp_array);
	}

	return temp_array;
}

var input = prompt("Enter input array");

console.log(input);



