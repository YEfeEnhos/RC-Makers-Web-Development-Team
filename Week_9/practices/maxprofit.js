//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/



arr = [9,3,7,2,8,4,12,3];

function maxProfit(prices) {
    let globalProfit = 0;
    let maxProfitPath;
      
    for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        let currentProfit = prices[j] - prices[i]
        if (currentProfit > globalProfit) {
          globalProfit = currentProfit
          maxProfitPath = i + " " + j;
        }
      }
    }
  
    return globalProfit + " " + maxProfitPath;
    
  }

console.log(maxProfit(arr));






function maxProfit2(prices) { //greedy search 
    let globalProfit = 0;
    let minBuyPrice = Infinity;
    let maxProfitPath;
  
    for (let i = 0; i < prices.length; i++) {
      if (minBuyPrice > prices[i]) {
        minBuyPrice = prices[i];
        index_min = i;
      }
  
      let currentProfit = prices[i] - minBuyPrice;
  
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
        maxProfitPath = index_min + " " + i;
      }
    }
  
    return globalProfit + " " + maxProfitPath;
}

console.log(maxProfit2(arr));