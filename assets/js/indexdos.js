const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  let inputOne = parseInt(document.querySelector("#inputOne").value);
  let inputTwo = +document.querySelector("#inputTwo").value;
  let inputThree = +document.querySelector("#inputThree").value;

  let result = inputOne + inputTwo + inputThree;
  let mensaje = document.querySelector("#mensaje");

  if (result <= 10) {
    mensaje.innerHTML = "LLevas " + result + " Stickers";
  } else {
    mensaje.innerHTML = "Llevas demasiados Stickers";
  }
});
