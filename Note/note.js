const monForm = document.getElementById("monForm");
const champInput = document.getElementById("champInput");
const buttonAjouter = document.getElementById("buttonAjouter");
const champResult = document.getElementById("champResult");

generateurNote = (event) => {
  event.preventDefault();

  const textInput = champInput.value;
  // console.log(textInput);

  if (textInput === "") {
    alert("Veuillez entrer des données dans le champ.");
  }

  champResult.textContent = textInput;

  // Fonction pour créer un bouton avec du texte et une action
  const creationButton = (text, action) => {
    const button = document.createElement("button");

    button.textContent = text;
    button.classList.add("button");
    button.addEventListener("click", action);
    return button;
  };
  // Création des boutons avec leur texte et leur action associée
  const buttonSupprimer = creationButton("supprimer", () => {
    champResult.remove();
  });

  champInput.value = "";
};

buttonAjouter.addEventListener("click", generateurNote);
