function calcula() {
  let inputCelcius = document.querySelector("#inputCelcius");
  let resultado = document.querySelector("#resultado");

  if (inputCelcius.value !== "") {
    let c = parseFloat(inputCelcius.value);
    let f = c * 1.8 + 32;
    resultado.innerHTML = "A temperatura em Fahrenheit é: " + f;
  }
}
