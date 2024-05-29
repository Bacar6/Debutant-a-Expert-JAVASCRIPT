// Créez une fonction qui renvoie true quand num1 est égal à num2; sinon reviens false.

// Exemples
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false

const compareNumbers = (num1, num2) => {
  return num1 === num2;
};

console.log(compareNumbers(5, 5)); // true
console.log(compareNumbers(53, 53)); // false
console.log(compareNumbers("5", 5)); // false
