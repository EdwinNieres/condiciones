function valor() {
  let valorUno = document.querySelector("#opcion1").value;
  let valorDos = document.querySelector("#opcion2").value;
  let valorTres = document.querySelector("#opcion3").value;

  let total = +valorUno + valorDos + valorTres;

  let h3 = document.querySelector("#resultado");

  if (total == 911) {
    h3.innerHTML = "Password 1 Correcto";
  } else if (total == 714) {
    h3.innerHTML = "Password 2 Correcto";
  } else {
    h3.innerHTML = "Password Incorrecto";
  }
}
