function calcula() {
  let inputP1 = document.querySelector("#p1");
  let inputP2 = document.querySelector("#p2");
  let inputP3 = document.querySelector("#p3");
  let resultado = document.querySelector("#resultado");

  if (inputP1.value !== "" && inputP2.value !== "" && inputP3.value) {
    let p1 = inputP1.value;
    let p2 = inputP2.value;
    let p3 = inputP3.value;

    if (p1 < p2 && p1 < p3) {
      resultado.innerHTML = "Produto 1 é mais barato.";
    } else if (p1 < p2 && p1 > p3) {
      resultado.innerHTML = "Produto 3 é mais barato.";
    } else if (p2 < p1 && p2 < p3) {
      resultado.innerHTML = "Produto 2 é mais barato.";
    } else if (p3 < p1 && p3 < p2) {
      resultado.innerHTML = "Produto 3 é mais barato.";
    } else {
      resultado.innerHTML = "Não existe somente um produto com o menor valor.";
    }
  }
}
