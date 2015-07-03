function crazySum(arr1) {
    var sum = 0;
    for(var i = 0; i < arr1.length; i++){
    	sum += i * arr1[i];
    }
    return sum;

    }

    var arrayLoc = [2,4,8];
    console.log(crazySum(arrayLoc));

    function crazy_nums(max){
    	var output = [];

    	for(var i = 3; i < max; i++){
    		if((i % 3) && (i % 5)){
    			//Do nothing 
    		} else if((i % 3) || (i % 5)) {
    				output.push(i);
    			
    	}
    }

    return output;
}

console.log(crazy_nums(3));
console.log(crazy_nums(10));
console.log(crazy_nums(20));
