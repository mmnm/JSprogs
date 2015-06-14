
function commonFactors(var1, var2) {

	if( var1 <= 0 || var2 <== 0 )
		return 0;

	var low = var1;

	if (var2 < low)
		low = var2;
	
	var output = [];

	for(var i = 0; i <= low; i++) {
		 if( ( (var1 % i) === 0 ) && ( (var2 % i) === 0 ) )
			output.push(i);
		}
	
	output.sort();

	return output;

}

var input1 = prompt("Enter number 1");
var input2 = prompt("Enter number 2");

console.log("Common factors sorted are: " + commonFactors(input1, input2) );


 
