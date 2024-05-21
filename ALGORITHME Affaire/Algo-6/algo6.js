// EXERCICE 6
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3
// Pour cette exercice on va utiliser la méthode Math.max() qui permet de retourner le plus grand nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.max(...monTableau)) // 3

// CODE ICI -----------------------------------------------------------//

const plusGrandNombre = (tableau) => {
  const nombrePlusGrand = Math.max(...tableau);
  return nombrePlusGrand;
};

const monTableau = [1, 2, 3];

console.log(plusGrandNombre(monTableau));

//----------------------------------------------------------------------------------------------//
