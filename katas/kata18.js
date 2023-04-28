// 21 reverter a string e adicionar espaços entre as letras
// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

function reverse(str) {
  let arr = str.split(" ");
  let result = arr.map((currentElement, i) => {
    if (i % 2 === 0) {
      return currentElement;
    } else {
      return currentElement.split("").reverse().join("");
    }
  });
  return result.join(" ").trim();
}
