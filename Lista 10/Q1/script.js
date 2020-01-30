class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.apresenta;
  }

  apresenta() {
    console.log(
      `Olá, meu nome é ${this.nome} tenho ${this.idade} anos e meu sexo é ${this.sexo}`
    );
  }
}

function main() {
  let p = new Pessoa("João", 25, "Masculino");
  p.apresenta();
}

main();
