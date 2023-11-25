function borderColor() {
  let one = document.querySelector("#img-ventana");
  if (one.style.borderColor !== "red") {
    one.style.border = "2px solid red";
  } else {
    one.style.border = "none";
  }
}
