// reorganizar os números de maneira decrescente
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

function descendingOrder(n) {
  let arr = String(n).split(""); // transforma o numero em array
  let sorted = arr.sort((a, b) => b - a).join(""); // organiza e depois o join transforma em string de novo
  return Number(sorted); //pra só depois virar número
}
