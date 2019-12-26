# test
Teste de Lógica de programação

Para realizar o teste você deve gerar um fork desse repositório, realizar os testes das listas abaixo e subi de forma publica para que possamos visualizar.

Após concluido o teste deve ser enviado um email para contato@agrocr.com.br, contendo seu nome e telefone com DDD.

O tempo para completar essa lista deve ser no máximo 1 dia ou seja 24 horas.

Você utilizar qualquer linguagem de programação ou até mesmo fazer em "portugol".

## Lista 1 - Expressões, entrada e saída de dados

1. A autonomia de um veículo é baseada em quantos quilômetros ele consegue percorrer a cada litro de combustível consumido. Por exemplo, é comum afirmar que tal carro é capaz de fazer 15 quilômetros por litro de combustível. Com base nisso, elabore um algoritmo que leia uma distância percorrida em quilômetros e uma quantidade de litros de combustível consumidos, e informe quantos quilômetros este veículo pode percorrer com cada litro.
2. Alguns países de língua inglesa, como os EUA, utilizam da unidade de medida grau Fahrenheit como escala de temperatura. Para converter uma temperatura de Celsius para Fahrenheit, podemos aplicar a fórmula `F=(9*C+160)/5` ou a fórmula `F=C*1.8+32`, onde F é a temperatura em Fahrenheit e C a temperatura em Celsius. Elabore um algoritmo que leia uma temperatura em graus Celsius e a escreva convertida em graus Fahrenheit.
3. Para auxiliar uma loja que deseja parcelar o valor das compras de seus clientes, elabore um algoritmo que leia o valor de uma compra e o número de prestações desejadas, e escreva o valor das prestações.

## Lista 2 - Estruturas de decisão: Se/Senão

1. Para auxiliar um cliente a escolher o produto mais barato em um conjunto de 3 produtos, crie um programa que leia os preços de 3 produtos e informe qual deles é o mais barato.
2. Construa um programa que leia um caractere e informe se este caractere é uma vogal.
3. O IMC (Índice de Massa Corporal) é uma unidade de medida internacional usada para calcular se uma pessoa está no seu peso ideal. A fórmula mais genérica de cálculo de IMC é `imc = peso / (altura * altura)`, onde o peso é dado em quilos e a altura em metros. Há uma tabela que define uma classificação para cada faixa de IMC. Segundo esta tabela, pessoas com IMC menor ou igual a 18.5 estão abaixo do peso; pessoas com IMC maior que 18.5 e menor que 25 estão no peso ideal; já as pessoas com IMC maior ou igual a 25 estão acima do peso. Elabore um algoritmo que leia peso e altura de uma pessoa, informe seu IMC e também se ela está abaixo do peso, no peso ideal ou acima do peso.

## Lista 3 - Estruturas de decisão: Escolha/Caso

1. Verificar a quantidade de combustível que será gasta em uma viagem é de grande importância para o condutor. Considerando que um carro do tipo A é capaz de percorrer 12 quilômetros a cada litro de combustível gasto, um do tipo B percorre 9 quilômetros a cada litro e um do tipo C, 8 quilômetros por litro, elabore um programa que leia a distância a ser viajada e o tipo de carro, e com base nestes dados informe quantos litros de combustível serão gastos.
2. Construa um programa que funcione como um menu para uma lanchonete. Seu programa deverá iniciar mostrando o nome da sua lanchonete. Em seguida, seu programa deverá pedir o nome do usuário e, após lê-lo, exibir uma mensagem de boas-vindas. Após isso, seu programa deverá mostrar as opções de lanches disponíveis e seus preços: mostre pelo menos 6 opções de lanches diferentes. Permita que o usuário escolha uma das opções de lanches e, após a escolha, mostre a ele uma mensagem informando a opção que ele escolheu e quanto seu pedido irá custar. Lembre-se de avisar ao usuário caso ele escolha uma opção inexistente.

## Lista 4 - Laços de Repetição: Enquanto e Faça/Enquanto

1. Elabore um algoritmo que leia dois números inteiros diferentes: `ini` e `fim`, sendo que `ini` deve ser menor que `fim`. Escreva em ordem crescente todos os números inteiros entre `ini` e `fim`, inclusive eles mesmos.
2. Repita a questão anterior, desta vez presumindo que `ini` pode ou não ser maior que `fim`. Se `ini` for maior que `fim`, siga a ordem decrescente.
3. Construa um programa que repita a tarefa de ler um número inteiro, enquanto o número lido for maior que 1. Ao término das repetições, escreva o resultado da soma de todos os números lidos.

## Lista 5 - Laços de Repetição: Para

1. Elabore um algoritmo que escreva apenas os números pares de 300 a 600.
2. Elabore um algoritmo que escreva apenas os números ímpares de 750 a 1500.

## Lista 6 - Desafios com Laços de Repetição

1. Dado o problema anterior, construa um programa que leia um número inteiro N e escreva apenas N termos da sequência de Fibonacci.
2. Ainda baseado no problema da sequência de Fibonacci, construa um programa que leia um número inteiro N e escreva a soma dos N primeiros termos da sequência de Fibonacci.

## Lista 7 - Vetores

1. Em um vetor que contém as médias de uma turma de 10 alunos, calcule a média da turma e conte quantos alunos obtiveram nota acima da média da turma. Escreva a média da turma e o total de alunos acima da média.
2. Declare um vetor com 5 nomes de pessoas diferentes. Em seguida, permita que o usuário digite um nome. Se este nome estiver no vetor, informe que tal pessoa foi encontrada. Senão, informe que tal pessoa não foi encontrada.

## Lista 8 - Matrizes

1. Com uma matriz de 5 x 2, leia os nomes e idades de 5 pessoas. Ao fim, informe quantas destas pessoas são menores de 18 anos e quantas são maiores.
2. Preencha duas matrizes de 4 x 2 e gere uma matriz soma. Ex.: `soma[1][1] = a[1][1] + b[1][1]`.

## Lista 9 - Funções

1. Crie uma função `calculaAreaCirculo(raio)` que calcule e retorne a área de um círculo com base em seu raio.
2. Crie uma função `mostrarLista(lista)` que receba um `array` como parâmetro, percorra cada uma de suas posições e as escreva separadamente no console.
3. Crie uma função `matrizNula(matriz)` que receba uma matriz como parâmetro, retorne `true` caso a matriz seja nula e `false` caso contrário.

## Lista 10 - Objetos

1. Construa uma classe `Pessoa`, contendo algumas propriedades, como `nome`, `idade` e  `sexo` e um método `apresenta()`, que exiba uma mensagem de apresentação com os dados desta pessoa.
2. Construa uma classe `Retangulo`, contendo as propriedades `altura` e `largura`, e um método `area()` ou `calculaArea()`. A área de um retângulo é dada pela seguinte fórmula: `A = b * h`, onde `A` representa área, `b` representa `base` e `h` representa altura.
