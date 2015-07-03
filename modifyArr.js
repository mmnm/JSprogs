function addOne(var1){
	return var1 + 1;
}

function sayHello(var2){
	return "Hello" + var2;
}

function modifyArray(array, callback) {

	if(array == null){
		return;
	}
if( !typeof callback === 'function' ){
		console.log("Bad!! Callback is not function");
		return;
	}
	
	var str = "";
	for(var i = 0; i < array.length; i++) {
		str += callback(array[i]);
	}
	
	return str.split("").join();
}

var abc = [1,2,3,4];
	
console.log(modifyArray(abc, addOne));
console.log(modifyArray(abc, sayHello));
