// EXERCICE 7
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1
// Pour cette exercice on va utiliser la méthode Math.min() qui permet de retourner le plus petit nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.min(...monTableau)) // 1

// CODE ICI --------------------------------------------------------//

const plusPetitNombre = (tableau) => {
  const nombrePlusPetit = Math.min(...tableau);
  return nombrePlusPetit;
};

const monTableau = [1, 2, 3];

console.log(plusPetitNombre(monTableau));

//----------------------------------------------------------------------------------------------//
