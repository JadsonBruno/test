function calcula() {
  let matriz = [];
  for (let i = 0; i < 5; i++) {
    matriz[i] = [
      prompt("Digite o nome da pessoa " + (i + 1)),
      prompt("Digite a idade da pessoa " + (i + 1))
    ];
  }
  let contMaior = 0;
  for (let i = 0; i < 5; i++) {
    if (matriz[i][1] >= 18) {
      contMaior++;
    }
  }
  console.log(contMaior + " pessoas são maiores de idade.");
  console.log(5 - contMaior + " pessoas são menores de idade.");
}
calcula();
