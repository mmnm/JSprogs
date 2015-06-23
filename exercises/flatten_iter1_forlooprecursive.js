

function flatten(collection){
	

	for (var i = 0; i < collection.length; i++) {
		if(Array.isArray(collection[i])){
			flatten(collection[i]);
		}else{
			output.push(collection[i]);
		}
	}

	return output;
}

var abc = [1,[2,3,[4,5,[9,11],13,18],21,[23,27],31],11];
console.log(flatten(abc));