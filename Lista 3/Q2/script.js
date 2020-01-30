function mostrar() {
  let inputNome = document.querySelector("#inputNome");
  let resultado = document.querySelector("#resultado");

  if (inputNome.value !== "") {
    mostrarCardapio(inputNome.value, resultado);
    inputNome.value = "";
  }
}

function mostrarCardapio(nome, resultado) {
  resultado.innerHTML += `Olá ${nome}, digite o número do seu pedido: `;
  let cardapioElement = document.querySelector("#cardapio");
  cardapioElement.innerHTML = "";

  let op1 = document.createElement("li");
  let t1 = document.createTextNode("1 - Hambúrguer -------------- R$15");
  op1.appendChild(t1);

  let op2 = document.createElement("li");
  let t2 = document.createTextNode("2 - Pizza Portuguesa --------   R$25");
  op2.appendChild(t2);

  let op3 = document.createElement("li");
  let t3 = document.createTextNode("3 - Batata Frita --------------- R$9");
  op3.appendChild(t3);

  let op4 = document.createElement("li");
  let t4 = document.createTextNode("4 - Coca-Cola 200ml -------- R$5");
  op4.appendChild(t4);

  let op5 = document.createElement("li");
  let t5 = document.createTextNode("5 - Suco de laranja ----------- R$3");
  op5.appendChild(t5);

  let op6 = document.createElement("li");
  let t6 = document.createTextNode("6 - Hambúrguer -------------- R$15");
  op6.appendChild(t6);

  cardapioElement.appendChild(op1);
  cardapioElement.appendChild(op2);
  cardapioElement.appendChild(op3);
  cardapioElement.appendChild(op4);
  cardapioElement.appendChild(op5);
  cardapioElement.appendChild(op6);

  let inputOp = document.createElement("input");
  inputOp.setAttribute("type", "text");
  inputOp.setAttribute("id", "op");
  inputOp.setAttribute("placeholder", "Número do lanche");
  resultado.appendChild(inputOp);
  let btnOp = document.createElement("button");
  let textBtn = document.createTextNode("Pedir");
  btnOp.appendChild(textBtn);

  resultado.appendChild(btnOp);
  btnOp.addEventListener("click", () => {
    let input = document.querySelector("#op");
    if (input.value !== "") {
      let op = parseInt(input.value);
      switch (op) {
        case 1:
          resultado.innerHTML +=
            "<br/> Seu pedido: Hambúrguer -------------- R$15";
          break;
        case 2:
          resultado.innerHTML +=
            "<br/> Seu pedido: Pizza Portuguesa --------   R$25";
          break;
        case 3:
          resultado.innerHTML +=
            "<br/> Seu pedido: Batata Frita --------------- R$9";
          break;
        case 4:
          resultado.innerHTML +=
            "<br/> Seu pedido: Coca-Cola 200ml -------- R$5";
          break;
        case 5:
          resultado.innerHTML +=
            "<br/> Seu pedido: Suco de laranja ----------- R$3";
          break;
        case 6:
          resultado.innerHTML +=
            "<br/> Seu pedido: Hambúrguer -------------- R$15";
          break;

        default:
          resultado.innerHTML += "<br/> Opção inválida.";
          break;
      }
    }
  });
}
