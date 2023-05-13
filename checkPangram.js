const checkIfPangram = (sentence) => {
  return (new Set(sentence)).size === 26
}