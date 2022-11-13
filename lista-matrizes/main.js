/* Elabore um algoritmo que leia uma matriz A(5 x 5) do teclado e crie uma matriz B
onde cada elemento é o triplo do elemento correspondente de A. */

let matrizA = [];
let matrizB = [];

let valor;

for (let i=0; i < 5; i++) {

    matrizA.push([]);
    for (let j=0; j < 5; j++) {

        valor = Number(prompt("Digite um valor para adicionar a matriz (5x5) :"));
        matrizA[i].push(valor);
    }
}

for (let i=0; i < 5; i++) {

    matrizB.push([]);
    for (let j=0; j < 5; j++) {

        matrizB[i].push(matrizA[i][j]*3);
    }
}

console.log(matrizB);


/* Faça um algoritmo que leia uma matriz de 10 x 8 e apresente na tela o maior e o 
menor elemento da matriz.
*/

let matriz = [];
let valor;
let maiorValor = 0;
let menorValor = 0;

for (let i=0; i < 10; i++) {
    matriz.push([]);
    for (let j=0; j < 8; j++) {

        valor = Number(prompt("Digite um valor para adicionar a matriz (10x8):"));
        matriz[i].push(valor);

        maiorValor = matriz[0][0];
        menorValor = matriz[0][0];

        valor > maiorValor ? maiorValor = valor : null;
        valor < menorValor ? menorValor = valor : null;

    }
}

console.log(`
    Maior valor: ${maiorValor}\n 
    Menor valor: ${menorValor}
    `)

/* Crie um algoritmo que leia uma matriz de dimensão (10 x 6) e apresente 
na tela a quantidade de elementos pares desta matriz*/

let matriz = [];
let valor;
let pares = 0;

for (let i=0; i < 10; i++) {
    matriz.push([]);
    for (let j=0; j < 6; j++) {

        valor = Number(prompt("Digite um valor para adicionar a matriz (10x6):"));
        matriz[i].push(valor);

        valor % 2 === 0 ? pares++ : null;
    }
}

console.log(`Quantidade de elementos pares dentro da matriz : ${pares}`);

/* Faça um algoritmo que leia uma matriz A(5 x 5). Construa uma matriz B de mesma dimensão
onde cada elemneto de B deverá ser o dobro de cada elemento correspondente de A, exceto para 
os valores da diagonal principal (números 1 na matriz de exemplo abaixo), cujos valores deverão 
ser o triplo de cada elemento correspondente da matriz A */

let matrizA = [];
let matrizB = [];

let valor;

for (let i=0; i < 3; i++) {

    matrizA.push([]);
    for (let j=0; j < 3; j++) {

        valor = Number(prompt("Digite um valor para adicionar a matriz (5x5) :"));
        matrizA[i].push(valor);
    }
}

for (let i=0; i < 3; i++) {

    matrizB.push([]);
    for (let j=0; j < 3; j++) {

        if 
        matrizB[i].push(matrizA[i][j]);
    }
}

console.log(matrizB);