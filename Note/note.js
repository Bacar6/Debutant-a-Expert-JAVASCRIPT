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

  console.log(champResult);

  champInput.value = "";
};

buttonAjouter.addEventListener("click", generateurNote);
