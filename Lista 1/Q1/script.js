function calcula() {
  let inputKM = document.querySelector("#inputKM");
  let inputLitros = document.querySelector("#inputLitros");
  let resultado = document.querySelector("#resultado");
  if (inputKM.value !== "" && inputLitros.value !== "") {
    let km = parseFloat(inputKM.value);
    let litros = parseFloat(inputLitros.value);
    let autonomia = km / litros;
    resultado.innerHTML = "Autonomia de " + autonomia + "km/l";
  }
}
