function calcula() {
  let nomes = ["Maria", "José", "Bruno", "Jadson", "João"];
  let nome = prompt("Digite um nome: ");
  let op = false;
  for (const n in nomes) {
    if (nomes[n] === nome) op = true;
  }
  if (op) {
    console.log(nome, " encontrada");
  } else {
    console.log(nome, " não encontrada");
  }
}
calcula();
