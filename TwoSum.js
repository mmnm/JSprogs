/*Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var returnArray = [];
    var hash_array = [];
    for(var i = 0; i < nums.length; i++) {
        
        if( hash_array[nums[i]] || (hash_array[nums[i]] === 0) ) {
            returnArray.push(hash_array[nums[i]] + 1);
            returnArray.push(i + 1);
            
            break;
        }
        hash_array[target - nums[i]] = i;
        
    }
    return returnArray;
        
};