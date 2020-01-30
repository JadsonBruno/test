function calcula() {
  let alunos = [10, 4, 5, 8, 7, 9, 9.7, 10, 8.5, 6.5];
  let soma = 0;

  for (const aluno in alunos) {
    soma += alunos[aluno];
  }

  media = soma / alunos.length;

  let cont = 0;
  for (const aluno in alunos) {
    if (alunos[aluno] > media) {
      cont++;
    }
  }

  console.log("Média da turma é: ", media);
  console.log("Total de alunos acima da média é: ", cont);
}
calcula();
