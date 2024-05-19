// EXERCICE 4

// Crée une fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour rappel pour parcourir un tableau on utilise la méthode for :
// const monTableau = [1, 2, 3]
// for (let i = 0; i < monTableau.length; i++) {
//   console.log(monTableau[i]) // 1, 2, 3
// }

// CODE ICI -------------------------------------------------//

const monTableau = [1, 2, 3];

const sommeNombresTableau = (tableau) => {
  let somme = 0; // Initialiser la variable pour stocker la somme
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i]; // Ajouter chaque élément à la somme
  }
  return somme; // Retourner la somme totale
};

console.log(sommeNombresTableau(monTableau)); // Devrait afficher 6

//----------------------------------------------------------------------------------------------//
