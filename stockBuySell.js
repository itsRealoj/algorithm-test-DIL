(function() {
  
    const getMaxProfit = (stockPrices) => {
        
        if(stockPrices.length == 0){
            return -1;
        }
        
        if(stockPrices.length == 1){
            return 0;
        }
        
        let lowestPrice = Math.min(stockPrices[0], stockPrices[1]);
        let maxProfit = stockPrices[1] - stockPrices[0];
        let lowestPriceIndex = stockPrices[0] < stockPrices[1] ? 0 : 1;
        
        for(let i =2; i <  stockPrices.length; i++){
            if(stockPrices[i] > lowestPrice) {
                let profit = stockPrices[i] - lowestPrice;
                if(profit > maxProfit && profit > 0) {
                    maxProfit = profit;
                }
            } else if(stockPrices[i] < lowestPrice){
                lowestPrice = stockPrices[i];
                lowestPriceIndex = i;
            }
        }
        
        if(maxProfit >= 0){
            return maxProfit;
        } else {
            return -1;
        }
    }
    
    let profit1 = getMaxProfit( [1,5,6,7,34,10]);
    console.log(profit1);

    let profit2 = getMaxProfit( [200, 1,5,6,7,34,10]);
    console.log(profit2);

    let profit3 = getMaxProfit( [10, 7] );
    console.log(profit3)
})();
