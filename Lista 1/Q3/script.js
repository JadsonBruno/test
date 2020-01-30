function calcula() {
  let inputValor = document.querySelector("#inputValor");
  let inputPrestacoes = document.querySelector("#inputPrestacoes");

  let resultado = document.querySelector("#resultado");

  if (inputPrestacoes.value !== "" && inputValor.value !== "") {
    let valor = parseFloat(inputValor.value);
    let prestacoes = parseInt(inputPrestacoes.value);
    let result = valor / prestacoes;
    resultado.innerHTML = "O valor de cada prestação é " + result;
  }
}
