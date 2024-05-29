/* Créez une fonction qui prend un nombre comme seul argument et renvoie true s'il est inférieur ou égal à zéro, sinon renvoie false.
Exemples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true
*/

const inférieurOuEgalAZero = (n) => {
  return n <= 0;
};

console.log(inférieurOuEgalAZero(1));
console.log(inférieurOuEgalAZero(-1));
console.log(inférieurOuEgalAZero(0));
