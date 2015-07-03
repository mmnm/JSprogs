

function reduce(collection, accumulator, callback){
        if(!typeof callback === "function")
                return "Error";

        collection.forEach(function(var1){
                accumulator = callback(accumulator, var1);
        });
        return accumulator;
}



function flatten(collection){
	var output = [];

	output = reduce(collection, output, function(accumulator, var1) {
		if(Array.isArray(var1)){
			return accumulator.concat(flatten(var1));
		}else{
			return accumulator.concat(var1);
		}
	});

	return output;
	
}



var test = [1,2,4];
var abc = [1,[2,3,[4,5,[9,11],13,18],21,[23,27],31],11];
console.log(flatten(abc));
console.log(flatten(test));


