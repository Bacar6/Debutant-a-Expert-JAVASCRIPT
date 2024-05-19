//----------------------------------------------------------------------------------------------//
// EXERCICE 1
// Crée une fonction qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6 => 6 * 2 = 12

// Pour rappel pour écrire une fonction en JS on utilise la syntaxe suivante :

// const nomDeMaFonction = (paramètre) => {
//   // Code de ma fonction
// }
// console.log(nomDeMaFonction(On remplace le paramètre par ce qu'on désire)) //

// CODE ICI------------------------------------------------------------------//

const multiplier = (a, b) => {
  let produit = a * b;

  let resultat = produit * a;

  return resultat;
};

console.log(multiplier(2, 3));

//----------------------------------------------------------------------------------------------//
