function main() {
  let lista = [10, 20, 30, 40, 50, 60, 70];
  mostrarLista(lista);
}

function mostrarLista(lista) {
  for (const el in lista) {
    console.log(lista[el]);
  }
}

main();
