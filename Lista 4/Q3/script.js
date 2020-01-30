function calcula() {
  let soma = 0;
  let num;
  do {
    num = parseInt(prompt("Digite um numero"));
    soma += num;
  } while (num > 1);

  console.log("Soma dos números que você digitou é: " + soma);
}
calcula();
