/*Fb question - Given array of contacts/phones, detect and union common ones*/
/*Eg., 
[["John", "john@gmail.com", "john@fb.com"],
["Dan", "dan@fb.com", "+123456"],
["johnie", "+22494", "john12@skype.com"],
["John G", "+22494", "john@fb.com]];

Output = [[0,2,3], [1]]
*/

//We will use hashes and see from there :-)
var hashMap = {};

var combineContacts = function(inputArr) {



	if(!Array.isArray(inputArr) || inputArr.length === 1)
		return inputArr;

	

	for (var i = 0; i < inputArr.length; i++) {
		var subArr = inputArr[i];
		//Assume that the first letter is always a name, ignore in making the hash
		for (var j = 1; j < subArr.length; j++) {
			if( subArr[j] in hashMap ){
				var temp = [];
				temp.push(hashMap[subArr[j]]);
				temp.push(i);
				hashMap[subArr[j]] = temp;
			} else {
				hashMap[subArr[j]] = i;
			}
		};
	};

	var hashHelp = [];

 var outArray = [];
 for(var k in hashMap) {
 	outArray.push(hashMap[k]);
 }

/*
//This is the idea to merge items having any common key 
//becomes complicated and buggy.

 for (var i = 0; i < outArray.length; i++) {
 	var temp = outArray[i];
 	if(Array.isArray(temp)) {
 		var merge = 0;
 		var merge_index = -1;
 		var no_merge_index = -1;
 		for (var n = 0; n < temp.length; n++) {

 			if(temp[n] in hashHelp) {

 				merge = 1;
 				merge_index = hashMap[temp[n]];
 				no_merge_index = n;
 				break;
 			} else {
 				hashHelp[temp[n]] = i;
 			}
 		};

 		if(merge) {
 			var merge_toArr = [];
 			merge_toArr.push(outArray[merge_index]);
 			for(var ss = 0; ss < temp.length; ss++) {
 				if( !(ss == no_merge_index)) {
 					merge_toArr.push(temp[ss]);
 				}
 			}
 			outArray[merge_index] = merge_toArr;
 			delete outArray[i];
 		}
 	}
 };
 */

return outArray;

};

var printVal = function(item) {
	if(typeof item === "Object") {
		for(var k in item) {
			console.log("Key: " + k + "Value: " + item[k]);
		}
	} else {
		console.log(item);
	}
};

var contactsArray = [["John", "john@gmail.com", "john@fb.com"],
					 ["Dan", "dan@fb.com", "+123456"],
					 ["johnie", "+22494", "john12@skype.com"],
					 ["JohnG", "+22494", "john@fb.com"]];

console.log(combineContacts(contactsArray));




