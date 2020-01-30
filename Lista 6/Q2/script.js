function calcula() {
  let n = parseInt(prompt("Digite um inteiro"));
  let fib1 = 1;
  let fib2 = 1;
  let soma = 0;
  let cont = 0;
  for (let i = 3; i < n; i++) {
    soma = fib1;
    fib1 = fib2;
    fib2 = soma;
    cont += soma;
  }
  console.log(cont);
}

calcula();
