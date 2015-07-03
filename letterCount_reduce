var letterCount = function(str) {
	
	if(typeof str === "undefined") {
		return null;
	}
	return str.reduce(function(accumulator, var1) {
		if(typeof accumulator[var1] != "undefined") {
			accumulator[var1]++;
		} else {
			accumulator[var1] = 1;
		}
		return accumulator;
	}, {});
	
}


var abc = "aabccda";
console.log(letterCount(abc.split('')));