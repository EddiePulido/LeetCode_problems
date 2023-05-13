var rotateString = function(s, goal) {
  const str = s + s
  return str.includes(goal) && s.length === goal.length
};