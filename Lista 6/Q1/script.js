function calcula() {
  let n = parseInt(prompt("Digite um inteiro"));
  console.log(fibonacci(n));
}

function fibonacci(n) {
  if (n == 1) return 1;
  else if (n == 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n + 2);
}

calcula();
