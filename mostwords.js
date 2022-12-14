var mostWordsFound = function(sentences) {
  return Math.max(...sentences.map(e => e.split(' ').length))
};