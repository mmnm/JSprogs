
function reverseArray(var1) {

	if(var1 === null || var1.length === 1)
		return var1;
	var var2 = [];
	for(var i = 0; i < ( var1.length / 2); i++) {
		var2[i] = var1[var1.length - 1 - i];
        var2[var1.length - 1 - i] = var1[i];
	}

	return var2.join('');

}

var input = prompt("Enter array elems");

console.log("Reverse array is: " + reverseArray(input));

		

		
