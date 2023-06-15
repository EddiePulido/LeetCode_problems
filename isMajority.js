const isMajorityElement = (nums, target) => {
  return nums.reduce((a,c) => c === target ? ++a : a, 0) > nums.length / 2
}