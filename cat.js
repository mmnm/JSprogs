//Assume 0 - hat off, 1 - hat on
/*
### PROBLEM DESCRIPTION 

# You have 100 cats (You are quite lucky to own so many cats!).

# You have arranged all your cats in a line. Initially, none of your cats 
# have any hats. You take 100 rounds walking around the cats, always starting 
# at the beginning. Every time you stop at a cat, you put a hat on it if it 
# doesn't have one, and you take its hat off if it has one on.

# The first round, you stop at every cat. The second round, you only stop at 
# every 2nd cat (#2, #4, #6, #8, etc.). The third round, you only stop at 
# every 3rd cat (#3, #6, #9, #12, etc.). You continue this process until the 
# 100th round (i.e. you only visit the 100th cat).

# Write a program that prints which cats have hats at the end. */


var collection = {};
for(var t = 1; t <= 100; t++){
  collection["cat" + t] = false;
}



function catsWithHats(collection){

  for(var i = 1; i <=100; i++){
    var round_start = i;

             //for each of cats 
             
    for(var j = round_start; j<=100;){
      collection[j] = !collection[j];
      j = j + round_start;
    }
  }
  
  var output_array = [];
  for(var k in collection){
    if(collection[k] === true)
      output_array.push(k);
  }

return output_array;

}

//console.log(collection);
console.log(catsWithHats(collection));

           
           