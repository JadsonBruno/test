function main() {
  let raio = prompt("Digite o valor do raio");
  console.log("Valor da área para esse raio é, ", calculaAreaCirculo(raio));
}

function calculaAreaCirculo(raio) {
  return Math.PI * (raio * raio);
}

main();
