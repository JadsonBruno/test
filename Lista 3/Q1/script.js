function calcula() {
  let inputDistancia = document.querySelector("#inputDistancia");
  let inputTipo = document.querySelector("#inputTipo");

  let resultado = document.querySelector("#resultado");

  if (inputDistancia.value !== "" && inputTipo.value !== "") {
    let distancia = parseFloat(inputDistancia.value);
    let tipo = inputTipo.value;
    switch (tipo) {
      case "A":
      case "a":
        resultado.innerHTML =
          "Serão gastos " +
          distancia / 12 +
          " litros de combustível com o carro A.";
        break;
      case "B":
      case "b":
        resultado.innerHTML =
          "Serão gastos " +
          distancia / 9 +
          " litros de combustível com o carro B.";
        break;
      case "C":
      case "c":
        resultado.innerHTML =
          "Serão gastos " +
          distancia / 8 +
          " litros de combustível com o carro C.";
        break;
      default:
        resultado.innerHTML = "Tipo de carro desconhecido.";
        break;
    }
  }
}
