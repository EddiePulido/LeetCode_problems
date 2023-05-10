var countNegatives = function(grid) {
  return grid.reduce((a,c) => a + c.filter(e => e < 0).length, 0)
};