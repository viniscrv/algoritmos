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
        matrizB[i] !== matrizB[j] ? matrizB[i].push(matrizA[i][j]*2) : matrizB[i].push(matrizA[i][j]*3);
    }
}

console.log(matrizB);

/* Crie um algoritmo que leia uma matriz A (5 x 2) e, em uma matriz B do mesmo tamanho,
armazene a soma dos elementos de A na primeira coluna e a multiplicação dos elementos de A
na segunda coluna */

let matrizA = [];
let matrizB = [];
let valor;

for (let i=0; i < 5; i++){
    matrizA.push([]);
    for (let j=0; j < 2; j++) {
        valor = Number(prompt("Digite um valor para adicionar a matriz A (5x2) :"));
        matrizA[i].push(valor);
    }
}

for (let i=0; i < 5; i++){
    matrizB.push([]);

    for (let j=0; j < 2; j++){
        j === 0 ? matrizB[i].push(matrizA[i][0] + matrizA[i][1]) : matrizB[i].push(matrizA[i][0] * matrizA[i][1])
    }
} 

console.log(matrizB);

/* Construa um algoritmo que leia do teclado uma matriz quadrada(12 x 12) e verifique se ela é 
uma matriz identidade. Uma matriz quadrada possui o mesmo número de linhas e colunas.
Uma matriz identidade possui 1 nos elementos da diagonal principal e 0 nos demais. Exemplo:
matriz identidade de dimensão 3x3. */


let matriz = [];
let valor;
let diagonal = 0;
let restante = 0;

for (let i=0; i < 12; i++) {
    matriz.push([]);

    for (let j=0; j < 12; j++) {
        valor = Number(prompt("Digite um valor para adicionar a matriz (12x12) :"));
        matriz[i].push(valor);

        matriz[i] === matriz[j] && matriz[i][j] === 1 ? diagonal++ : null;

        matriz[i][j] === 0 ? restante++ : null;
    }
}

console.log(matriz);

diagonal === matriz.length && restante === 144 - diagonal ? 
console.log("Matriz é uma matriz identidade") : console.log("Matriz *não* é uma matriz identidade");