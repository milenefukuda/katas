// 15 arrumar a array de maneira a organizar os números pares em ordem crescente e manter
// os números ímpares na posição original
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  let odd = array
    .filter((currentNumber) => currentNumber % 2 !== 0)
    .sort((a, b) => a - b);
  return array.map((currentNumber) => {
    if (currentNumber % 2 !== 0) {
      return odd.shift();
    } else {
      return currentNumber;
    }
  });
}
