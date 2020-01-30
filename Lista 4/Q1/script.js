function calcula() {
  let inputIni = document.querySelector("#inputIni");
  let inputFim = document.querySelector("#inputFim");

  let resultado = document.querySelector("#resultado");

  if (inputIni.value !== "" && inputFim.value !== "") {
    let ini = parseInt(inputIni.value);
    let fim = parseInt(inputFim.value);
    let cont = ini;
    while (cont <= fim) {
      console.log(cont++);
    }
    resultado.innerHTML = "Abra o console do navegador para ver o resultado.";
  }
}
