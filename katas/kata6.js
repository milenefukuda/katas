// spinWords reverse
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  //TODO Have fun :)

  let arr = string.split(" ");

  let newarr = [];

  arr.forEach((word) => {
    if (word.length < 5) {
      //se a palavra não tem o comprimento de 5, só adiciona ela.
      newarr.push(word);
    } else {
      //se a palavra tem mais que 5 de comprimento
      let newWord = word.split("").reverse().join("");
      newarr.push(newWord);
    }
  });

  let stg = newarr.join(" ");

  return stg;
}
