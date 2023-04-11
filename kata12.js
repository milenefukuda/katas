// reconhecer anagramas entre si com resultados de true ou false
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

var isAnagram = function (test, original) {
  let stTest = test.toLowerCase().split("").sort().join("");
  let stOriginal = original.toLowerCase().split("").sort().join("");
  if (stTest === stOriginal) {
    return true;
  } else {
    return false;
  }
};
