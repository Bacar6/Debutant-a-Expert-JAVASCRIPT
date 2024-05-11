const monForm = document.getElementById("monForm");
const champInput = document.getElementById("champInput");
const buttonAjouter = document.getElementById("buttonAjouter");
const champResult = document.getElementById("champResult");

generateurNote = (event) => {
  event.preventDefault();

  console.log("BONJOUR GALA");
};

buttonAjouter.addEventListener("click", generateurNote);
