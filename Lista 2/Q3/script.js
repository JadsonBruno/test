function calcula() {
  let inputPeso = document.querySelector("#inputPeso");
  let inputAltura = document.querySelector("#inputAltura");
  let resultado = document.querySelector("#resultado");

  if (inputPeso.value !== "" && inputAltura.value !== "") {
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);
    let imc = peso / (altura * altura);
    if (imc <= 18.5) {
      resultado.innerHTML = `Seu IMC é ${imc} e você está  abaixo do peso.`;
    } else if (imc > 18.5 && imc < 25) {
      resultado.innerHTML = `Seu IMC é ${imc} e você está  no peso ideal.`;
    } else {
      resultado.innerHTML = `Seu IMC é ${imc} e você está  acima do peso.`;
    }
  }
}
