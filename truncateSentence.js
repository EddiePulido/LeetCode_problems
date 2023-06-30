const truncateSentence = (s, k) => {
  return s.split(' ').slice(0,k).join(' ')
}