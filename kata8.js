// quantas ovelhas estão faltando?
// https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/train/javascript

function lostSheep(friday, saturday, total) {
  return (
    total -
    friday.reduce((acc, currentElement) => acc + currentElement, 0) -
    saturday.reduce((acc, currentElement) => acc + currentElement, 0)
  );
}
