function calcula() {
  let A = [
    [1, 3],
    [3, 10],
    [5, 22],
    [7, 32]
  ];
  let B = [
    [3, 2],
    [1, 4],
    [7, 6],
    [9, 8]
  ];

  let soma = [];
  for (let i = 0; i < 4; i++) {
    soma[i] = [A[i][0] + B[i][0], A[i][1] + B[i][1]];
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(soma[i][j]);
    }
  }
}
calcula();
