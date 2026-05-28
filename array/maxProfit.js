//  Best Time to Buy and Sell Stock
  function maxProfit(prices) {
    const n = prices.length;
    let mini_price = prices[0];
    let max_profit = 0;
    for(let i=0;i<n;i++){
        mini_price = Math.min(mini_price,prices[i]);
        max_profit = Math.max(max_profit,(prices[i]-mini_price));
    }
    return max_profit;
};