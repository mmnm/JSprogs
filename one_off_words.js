/* WORDS = ["door", "moot", "boot", "boots"]
one_off_words("moor", WORDS) == ["door", "moot"]*/

function one_off_words(str, word_list){
	//Lets build up a hash for str
	var output_array = [];
	var hash_table = [];

	for (var i = 0; i < str.length; i++) {
		 var temp = str[i];
		 hash_table[temp] = true;
	};

	for (var j = 0; j < word_list.length; j++) {
		var current_word = word_list[j];
		if(current_word.length !== str.length){
			continue;
		}
		var permissible = 1;
		for(var k = 0; k < current_word.length; k++){
			if(current_word[k] !== str[k]){
				--permissible;
			}
			if(permissible < 0){
				break;
			}
			if( (k === str.length -1) &&
				(permissible >= 0) ){
				output_array.push(current_word);
			}
		}
		
	}
	return output_array;
}

var dictionary = ["door", "moot", "boot", "boots"];

console.log(one_off_words("moor", dictionary));




