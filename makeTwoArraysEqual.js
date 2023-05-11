var canBeEqual = function(target, arr) {
  target.sort()
  arr.sort()

  return target.every((e,i) => e === arr[i])
};