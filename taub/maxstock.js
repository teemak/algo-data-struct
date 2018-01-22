function maxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for(let i = 0; i < pricesArr.length; i++) {
    if(changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if(sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if(tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }  
  }
  return maxProfit;
}

let data = [32,46,26,38,40,48,42];
let result = maxStockProfit(data);

console.log(result);
