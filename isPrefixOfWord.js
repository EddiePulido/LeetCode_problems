const isPrefixOfWord = (sentence, searchWord) => {
  const arr = sentence.split(' ')
  const index = arr.findIndex(word => word.startsWith(searchWord)) + 1

  return index || -1
}