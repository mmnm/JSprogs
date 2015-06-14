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

	if(input === null)
		return null;

	var counters = {};

	for(var i = 0; i < input.length; i++) {
		var temp = input[i];
		
		if(temp in counters) {
			counters[temp]++;
		} else {
			counters[temp] = 1;
		}
	}
	
	console.log(counters);

    
    var outputArray = [];
    
    for(var i in counters) {
        var temp = [];
        temp.push(i);
        temp.push(counters[i]);
        outputArray.push(temp);
        
    }
    
	
	
	


	return outputArray;
}

var input = prompt("Enter input array");

console.log(input);
console.log(freqChars(input));




