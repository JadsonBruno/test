function main() {
  let A = [
    [1, 3],
    [3, 10],
    [5, 22],
    [7, 32]
  ];

  let B = [];

  console.log(matrizNula(A));
  console.log(matrizNula(B));
}

function matrizNula(matriz) {
  return matriz.length > 0;
}

main();
