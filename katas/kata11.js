// 12 retornar array com numeros pares e outra com numeros impares
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let oddArray = [];
  let evenArray = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArray.push(integers[i]);
    } else {
      oddArray.push(integers[i]);
    }
  }
  return oddArray.length === 1 ? oddArray[0] : evenArray[0];
}

// O === 1 é pq só queremos 1 retorno
// O [0] nas arrays é tbm para evitar que retorne toda uma array sendo que o que nós queremos é apenas um número

function findOutlier(integers) {
  let even = integers.filter((currentNumber) => currentNumber % 2 === 0);
  let odd = integers.filter((currentNumber) => currentNumber % 2 !== 0);
  if (even.length === 1) {
    return even.pop();
  } else {
    return odd.pop();
  }
}

// Podemos usar o Pop pq ele salva 1 elemento e retorna ele mesmo
