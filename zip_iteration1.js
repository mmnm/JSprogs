function zip(collection){
	var count = 0;
	var output = [];

	var array_start_pos = [];
	for (var i = 0; i < collection.length; i++) {
		if(Array.isArray(collection[i])){
			array_start_pos[count] = i;
			count++;

		}
			
	};
	for(var j = 0; j < collection[0].length; j++){
		var prepare_array = [];
		for(var k = 0; k < count; k++){
			var array_start = array_start_pos[k];
			var array_to_push = collection[array_start];
			prepare_array.push(array_to_push[j]);
		}
		output.push(prepare_array);
	}
	return output;
}

//Test cases
var test = [[1,2],[3,4],[5,6]];
var test1 = [['fred', 'barney'], [30, 40], [true, false]];
console.log(zip(test));
console.log(zip(test1));