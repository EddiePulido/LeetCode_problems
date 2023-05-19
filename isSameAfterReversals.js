const isSameAfterReversals = num => {
  const rev = n => +[...n.toString()].reverse().join('')
  return rev(rev(num)) === num
}