// Créez une fonction qui prend trois arguments prob, prize et pay renvoie true if prob * prize > pay; sinon reviens false.
/*
Pour illustrer:

profitableGamble(0.2, 50, 9)
... devrait rapporter true, puisque le bénéfice net est de 1 (0,2 * 50 - 9) et 1 > 0.

Exemples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
*/
/*
Étapes à suivre
Déclarer la fonction : Utilisez la syntaxe des fonctions fléchées pour déclarer la fonction.
Calculer le bénéfice net : Multipliez prob par prize pour obtenir le bénéfice attendu.
Comparer le bénéfice attendu au coût : Utilisez une instruction if ou une expression ternaire pour comparer le bénéfice au coût.
Retourner le résultat : Retournez true si le bénéfice attendu est supérieur au coût, sinon retournez false.
*/

const profitableGamble = (prob, prize, pay) => {
  return prob * prize > pay;
};

// Exemple d'utilisation
console.log(profitableGamble(0.2, 50, 9)); // true
console.log(profitableGamble(0.9, 1, 2)); // false
console.log(profitableGamble(0.9, 3, 2)); // true
