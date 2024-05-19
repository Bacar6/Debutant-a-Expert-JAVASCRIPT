// EXERCICE 3

// Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]
// Pour rappel pour supprimer le dernier élément d'un tableau on utilise la méthode pop():
// const monTableau = [1, 2, 3]
// monTableau.pop()
// console.log(monTableau) // [1, 2]

// CODE ICI  ------------------------------------------------------------//

const supprimerDernierElement = (tableau) => {
  tableau.pop();
  return tableau;
};

const monTableau = [1, 2, 3];

console.log(supprimerDernierElement(monTableau));

//----------------------------------------------------------------------------------------------//
