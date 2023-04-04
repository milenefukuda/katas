// remover elementos que não se repetem na array
//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr, number) {
  let sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr[0] !== sortedArr[1]) {
    return sortedArr[0];
  } else {
    return sortedArr[sortedArr.length - 1];
  }
}

// OU

function findUniq(arr) {
  const uniqueNumber = [];

  for (let i = 0; i < arr.length; i++) {
    uniqueNumber = arr[i];

    if (arr.indexOf(uniqueNumber) === arr.lastIndexOf(uniqueNumber)) {
      return uniqueNumber;
    }
  }
}
