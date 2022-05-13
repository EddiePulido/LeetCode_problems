function coinChange(coins, amount){
  let max = amount + 1;
  
  let arr = new Array(max);
  arr.fill(max)
  arr[0] = 0;
  
  for(let i = 1; i <= amount; i++){
    for(let j = 0; j < coins.length; j++){
      if(i >= coins[j]){
        
        arr[i] = Math.min(arr[i], arr[i-coins[j]] + 1);
        
      }
    }
  }
  
  
  if(arr[amount] == max){
    return -1;
  }
  
  return arr[amount]
}