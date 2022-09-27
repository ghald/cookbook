// réccupéré le nombre d'assiete (quantityInput) et les quantité de base (amounts)
const quantityInput = document.querySelector("#quantityInput");
const amounts = document.querySelectorAll(".amount");
const amountArray = [];

// Remplir le tableau des quantité amountArray de chaque quantité signalité comme appartenant a amounts (element de class css .amount)
Array.from(amounts).forEach(function (element, index) {
  amountArray.push(Number(element.innerText));
});


// Empecher le rechargement de la page lorsque la touche entrée est presser sur quantityInput
quantityInput.addEventListener('keydown', function (e) {
  if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13)
  {e.preventDefault();return false;}
},true);

  


// Lorsque quantityInput change, chaque valeur du tableau amountArray est modifié
  // 'input' agit lorsque la modification se fasse au clavier, à la souris ou autre
  // 'change' agit lorsque le focus est perdu ; keyup agit lorsqu'une touche du clavier est relaché
quantityInput.addEventListener("input", function () {
  amountArray.forEach((value,i) => {
    amounts[i].innerHTML = (value * quantityInput.value) / 100;
    });
  });