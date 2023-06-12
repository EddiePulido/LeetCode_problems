const lastStoneWeight = stones => {
  stones.sort((a,b) => a - b)

  while(stones.length > 1){
      const last = stones[stones.length-1]
      const second = stones[stones.length - 2]
      if(last === second){
          stones.pop()
          stones.pop()
      }else{
          stones.pop()
          stones[stones.length - 1] = Math.abs(last - second)
      }
      stones = stones.sort((a,b) => a - b)

  }

  return stones[0] || 0
}