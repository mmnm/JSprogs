//Remove spaces from the input string
/*Input:  "g  eeks     for ge  eeks  "
Output: "geeksforgeeks" */

var removeSpace = function(str1) {
  var ctr = 0;
  var str2 = [];

  for(var i = 0; i < str1.length; i++) {
    if( str1[i] === " " ) {
      continue;
    } else {
      if( (ctr === i) && (ctr != 0) ) {
        ctr++;
        continue;
      } else {
        str2[ctr++] = str1[i]; 
      }
      
    }
  }


  return str2.join("");



}

console.log(removeSpace("g  eeks     for ge  eeks  "));
