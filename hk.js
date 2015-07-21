// Name: Manu Mishra
// Phone: 6787047075
// Email: manu.mish@gmail.com


// each([1,2,3,4,5], function(value){ console.log(value); });
// 1
// 2
// 3
// 4
// 5

// each({a: 'Manu', b: 'gmail', c: 'cool'}, function(value) { console.log(value); });
// 'Manu'
// 'gmail'
// 'cool'

var each = function(collection, callback){
  // write each
  
  if(Array.isArray(collection)) {
  
  for(var i=0; i <collection.length; i++) {
  		callback(collection[i]);
  }
  } else if (typeof collection === "object") {
  		for(var b in collection) {
    	callback(collection[b]);
    } 
    } else {
    console.log("Debug not supported");
  }
    
 
    
  
};

// reduce([1,2,3,4,5], function(total, value){ return total + value; }, 0);
// 15

// reduce({a: 'Manu', b: 'gmail', c: 'cool'}, function(total, value){ return total + ' ' + value; }, 'Hi');
// 'Hi Manu gmail cool'

var reduce = function(collection, callback, startValue){
  // write reduce
  
  if( typeof startValue === "undefined") {
  startValue = 0;
  }
  
 	each(collection, function(var1) {
  	startValue = callback(startValue, var1);
    });
  
  return startValue;
  
};

// filter({a: 'Manu', b: 'gmail', c: 'cool'}, function(value){ return value.toString().toLowerCase().substring(0,1) === 'm'; });
// ['Manu']

// filter([1,2,3,4,5], function(value){ return value > 3 });
// [4,5]

var filter = function(collection, predicate){
 // write filter
 //output_array ... each if (predicate ) output_array.push()

return reduce(collection, function(accum, var1) {
						if(predicate(var1)) {
              accum.push(var1);
              
            } 
            return accum;
          }, []);
        
 
};

// letterCount('abcabcabc', 'b');
// 3

var letterCount = function(text, letter){
  // write letterCount
  
  return reduce(text.split(''), function(count, var1) {
  if(var1 === letter) {
  count++;
  }
  return count;
  }, 0);
  

}


