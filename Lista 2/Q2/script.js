function calcula() {
  let inputCaractere = document.querySelector("#inputCaractere");
  let resultado = document.querySelector("#resultado");
  if (inputCaractere.value !== "") {
    let carc = inputCaractere.value;
    let result = false;
    if (carc === "A" || carc === "a") {
      result = true;
    } else if (carc === "E" || carc === "e") {
      result = true;
    } else if (carc === "I" || carc === "i") {
      result = true;
    } else if (carc === "O" || carc === "o") {
      result = true;
    } else if (carc === "U" || carc === "u") {
      result = true;
    }

    if (result) {
      resultado.innerHTML = "É uma vogal";
    } else {
      resultado.innerHTML = "Não é uma vogal";
    }
  }
}
