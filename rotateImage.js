var rotate = function(matrix) {
  for(let r = 0; r < matrix.length; r++){
      for(let c = r; c < matrix[0].length; c++){
          [matrix[r][c], matrix[c][r]] = [matrix[c][r] , matrix[r][c]]
      }
  }
  
  for(let i = 0; i < matrix.length; i++){
      matrix[i].reverse()
  }
  
  return matrix
};