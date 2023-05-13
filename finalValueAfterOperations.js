var finalValueAfterOperations = function(operations) {
  const ops = {
      '++X' : 1,
      'X++' : 1,
      '--X' : -1,
      'X--' : -1
  }

  return operations.reduce((a,c) => a + ops[c], 0)
};