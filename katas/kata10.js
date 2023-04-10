// deletar ocorrência depois de n vezes
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let filtered = result.filter((currentNumber) => arr[i] === currentNumber);
    if (filtered.length < n) {
      result.push(arr[i]);
    }
  }
  return result;
}
