/* function    returns boolean isSumArray(input_int_array) 
Return false from a function if any of the elems have value = sum of any other elems in input_int_array */

function isSumArray(input_int_array){
	var partial_sum = 0;
	for(var i = 0; i < input_int_array.length; i++){
		 var retVal = isSumArrayPartial(input_int_array, test_index, partial_sum);
		 if(!retVal)
		 	return retVal;
		 partial_sum = 0;
	};

}


function isSumArrayPartial(input_int_array,test_index, partial_sum){
	if(partial_sum === input_int_array[test_index])
		return false;

	for (var i = input_int_array.length - 1; i >= 0; i--) {
		if(i != test_index) 
			partial_sum += input_int_array[i];
			var ret = isSumArrayPartial(input_int_array, i, partial_sum);
			if(ret === false)
				return ret;
	};

}