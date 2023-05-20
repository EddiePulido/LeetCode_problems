var countSeniors = function(details) {
  const ages = details.map(e => +e.slice(11,13))

  return ages.reduce((a,c) => c > 60 ? ++a : a, 0)
};