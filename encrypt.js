/* String encoding */

function encrypt(word){
	var result = [];
	var prev = null;
	var prev_count = 0;
	//Remember we are running 
	//intentionally word.length + 1, in JS it will be fine as it will 
	//be undefined, in other languages this is danegrous (array out 
		//of bound )
	for (var i = 0; i < word.length + 1; i++) {
		if(prev !== null && prev === word[i]){
			prev_count++;
		}else if(prev !== null && prev !== word[i]){
			var cur_arr = [];
			cur_arr.push(prev);
			cur_arr.push(prev_count);
			result.push(cur_arr);
			//Reset to current
			prev = word[i];
			prev_count = 1;
		}else{
			prev = word[i];
			prev_count = 1;
		}

	};
	return result;

}

//Test cases
console.log(encrypt("aaabbcbbaaa"));
console.log(encrypt("aaaaaaaaaa"));
console.log(encrypt("aabbcc"));

