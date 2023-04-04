// remover valores de a contidos em b
//https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript

function arrayDiff(a, b) {
  if (b.length === 0) {
    return a;
  }
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}

// OU

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
