// 20 retornar o número que aparece um número ímpar de vezes
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (
      A.filter((currentElement) => currentElement === A[i]).length % 2 !==
      0
    ) {
      return A[i];
    }
  }
}
