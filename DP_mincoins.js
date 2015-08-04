/* Minimum number of coins to reach a sum denomination*/
/* E.,g Input :
Coin array : 1, 3, 5
Sum of 11 can be formed with 3 coins */


var minCoins = function(coin_array, totalSum) {
	
	if(typeof coin_array === "undefined") {
		return -1;
	}
	if(totalSum <= 0) {
		return 0;
	}

	var minsumArr = [];
	for (var i = 0; i <= totalSum; i++) {
	 minsumArr[i] = Number.MAX_VALUE;
	}

	minsumArr[0] = 0;
    for (var j = 1; j <= totalSum; j++) {
		for (var k = 0; (k < coin_array.length) && (coin_array[k] <= j); k++) {
			var test = minsumArr[j - coin_array[k]] + 1;
			if( test < minsumArr[j] ) {
				minsumArr[j] = test;
			}
		};
	};

	return minsumArr[totalSum];
}

console.log(minCoins([1,3,5], 11));
