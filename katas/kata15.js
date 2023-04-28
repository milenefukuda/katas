// 16 ver quais itens de uma array combinam com os itens de uma outra
// e organize em ordem alfabética
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(arr1, arr2) {
  let temp = [];

  for (let str1 of arr1) {
    for (let str2 of arr2) {
      if (str2.includes(str1)) {
        temp.push(str1);
        break;
      }
    }
  }
  return temp.sort();
}
