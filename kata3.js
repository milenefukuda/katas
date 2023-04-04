// filtrar os café de acordo com seu budget
// https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript

function search(budget, prices) {
  let filtered = prices.filter((currentPrice) => currentPrice <= budget);

  return filtered.sort((a, b) => a - b).toString();
}

// RESOLVIDO NUMA SÓ LINHA

function search(budget, prices) {
  return prices
    .filter((currentPrice) => currentPrice <= budget)
    .sort((a, b) => a - b)
    .toString();
}
