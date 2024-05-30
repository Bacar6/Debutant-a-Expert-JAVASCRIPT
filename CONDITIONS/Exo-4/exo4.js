/*
Créez une fonction qui prend une variable booléenne flag et la renvoie sous forme de chaîne.

Exemples
boolToString(true) ➞ "true"

boolToString(false) ➞ "false"
*/

/*
Étapes à suivre
Déclarer la fonction : Utilisez la syntaxe des fonctions fléchées pour déclarer la fonction.
Convertir le booléen en chaîne : Utilisez la méthode toString() de l'objet Boolean pour convertir le booléen en chaîne.
Retourner le résultat : Retournez la chaîne obtenue. 
*/
const boolToString = (flag) => {
  return flag.toString();
};

// Exemple d'utilisation
console.log(boolToString(true)); // "true"
console.log(boolToString(false)); // "false"
