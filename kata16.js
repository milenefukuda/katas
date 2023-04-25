// 18 devolver uma array no formato de número de telefone
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  let start = numbers.slice(0, 3).join("");
  let middle = numbers.slice(3, 6).join("");
  let end = numbers.slice(6, 10).join("");
  return `(${start}) ${middle}-${end}`;
}
