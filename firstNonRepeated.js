


function firstNonRep(input) {

	if ( input === null )
	return null;

	//Assume 128 chars
	var hash_count = [];
	
	for(var i = 0; i < input.length; i++) {
	
		var temp = input[i];	
		if(hash_count[temp] == null) {
			hash_count[temp] = 1;
		} else {
			hash_count[temp]++;
		}
	}

	//In 2nd loop we iterate to find first non-rep character
	
	for(var i = 0; i < input.length; i++) {
	
		var temp = input[i];	
		if(hash_count[temp] === 1) {
			return temp;
		}
	}
	//No character found which is non-repeated hence return null

	return null;
}

var input = prompt("Enter any string");

console.log( "First non-repeated char is: " + firstNonRep(input) ) ;
		
			 
	
		
			 
	