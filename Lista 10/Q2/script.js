class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  calculaArea() {
    return this.largura * this.altura;
  }
}

function main() {
  let retangulo = new Retangulo(10, 20);
  console.log(retangulo.calculaArea());
}

main();
