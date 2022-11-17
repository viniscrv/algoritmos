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

/* Construa um algoritmo que leia uma matriz de dimensão 7x4 e, em um vetor de 7 elementos,
armazene o menor elemento de cada linha da matriz. Exemplo: */


let matriz = [];
let vetor = [];
let menorValor;
let valor;

for (let i=0; i < 7; i++) {
    matriz.push([]);

    for (let j=0; j < 4; j++){
        valor = Number(prompt("Digite um valor para adicionar a matriz (7x4) :"));
        matriz[i].push(valor);
    }
}

console.log(matriz);

for (let i=0; i < 7; i++) {
    for (let j=0; j < 4; j++) {

        j === 0 ? menorValor = matriz[i][0] : null;

        matriz[i][j] < menorValor ? menorValor = matriz[i][j] : null;
    }
    vetor.push(menorValor);
} 

console.log(vetor);


/* Elabore um algoritmo que leia dois vetores A e B de 15 números do teclado.
Após a leitura, crie uma matriz de 15 linhas e 2 colunas onde  aprimeira coluna 
armaza os elementos de A e a segunda coluna armazena os elementos de B. Apresente 
a matriz na tela. Exemplo: */

let vetorA = [];
let vetorB = [];
let matriz = [];
let valor;

do {

    valor = Number(prompt("Digite um valor para adicionar ao vetor A :"));
    vetorA.push(valor);

} while (vetorA.length < 15)

do {

    valor = Number(prompt("Digite um valor para adicionar ao vetor B :"));
    vetorB.push(valor);

} while (vetorB.length < 15)

for (let i=0; i < 15; i++) {

    matriz.push([]);
    for (let j=0; j < 2; j++){

        j === 0 ? matriz[i].push(vetorA[i]) : matriz[i].push(vetorB[i])
    }
}

console.log(matriz);

/* Elabore um agoritmo que leia do teclado uma matriz triangular superior de dimensão
20x20. Uma matriz triangular superior é quadrada e possui 0 nos elementos abaixo da diagonal principal
e acima dela. Exemplo: matriz trangular superior de tamanho 4. */

let matriz = [];
let valor;

for (let i=0; i < 20; i++) {
    matriz.push([]);
    for (let j=0; j < 20; j++) {

        if (j < i){
            matriz[i].push(0);
        } else {
            valor = Number(prompt("Digite um valor para adicionar a matriz :"));
            matriz[i].push(valor);
        }
    } 
}

console.log(matriz);


/* Elabore um algoritmo que leia uma matriz A dimensão 3x4 e crie uma matriz B que 
representa a transposta de A. Apresente na tela a matriz B. Exemplo : */

let matrizA = [];
let valor;

for (let i=0; i < 3; i++){
    matrizA.push([])
    for (let j=0; j < 4; j++) {
        valor = Number(prompt("Digite um valor para adicionar a matriz :"));
        matrizA[i].push(valor);
    }
}

let matrizB = [];

for (let i=0; i < 4; i++){
    matrizB.push([]);
    for (let j=0; j < 3; j++) {
        matrizB[i].push(matrizA[j][i]);
    }
}

console.log(matrizB);

/* Contrua um algoritmo que leia duas matrizes do teclado de dimensão 5 x 3 e realize 
a troca dos elementos destas matrizes */

let matrizA = [];
let matrizB = [];
let valor;

for (let i=0; i < 5; i++){
    matrizA.push([]);
    for(let j=0; j < 3; j++){

        valor = Number(prompt("Digite um valor para adicionar a matriz A (5 x 3): "));
        matrizA[i].push(valor);
    }
}

let matrizAuxiliar = matrizA;

for (let i=0; i < 5; i++){
    matrizB.push([]);
    for(let j=0; j < 3; j++){

        valor = Number(prompt("Digite um valor para adicionar a matriz B (5 x 3): "));
        matrizB[i].push(valor);
    }
}

matrizA = matrizB;
matrizB = matrizAuxiliar;

console.log(matrizA);
console.log(matrizB);


/* O tempo que um determinado avião leva para percorrer o trecho entre duas localidades distintas está 
disponivel através da seguinte tabela:

a) Contrua um algoritmo que leia a tabela acima e informe ao usuário o tempo necessário para percorrer duas cidades 
por ele fornecidas, até o momento em que ele fornecer duas cidades iguais(fonte e destino). Não deve ser lido informações
para a diagonal principal. 

b) Elabore um algoritmo que imprima a tabela sem repetições(apenas o triângulo superior ou o triângulo inferior).
*/

// QUESTÃO A

let cidades =  [
    ["-", 02, 11, 06, 15, 11, 01],
    [02, "-", 07, 12, 04, 02, 15],
    [11, 07, "-", 11, 08, 03, 13],
    [06, 12, 11, "-", 10, 02, 01],
    [15, 04, 08, 10, "-", 05, 13],
    [11, 02, 03, 12, 05, "-", 14],
    [01, 15, 13, 01, 13, 14, "-"],
]

const pegarCidade = () => {

    let x;
    let y;

    do {
        x = Number(prompt("Digite a coordenada x da cidade : "));
        y = Number(prompt("Digite a coordenada y da cidade : "));

        x === y ? alert("As coordenadas não devem ser iguais!") : null;

    } while (x === y);

    return cidades[x][y];
} 

const calcularTempo = () => {

    let origem;
    let destino;

    do {
        alert("Preencha com os dados da cidade de origem:");
        origem = pegarCidade();

        alert("Preencha com os dados da cidade de destino:");
        destino = pegarCidade();

        origem === destino ? alert("Origem e destino devem ser diferentes!") : null;

    } while (origem === destino);

    return origem + destino;
}

console.log(`Tempo necessário para percorrer as cidades fornecidas: ${calcularTempo()} minutos`);

// QUESTÃO B

let cidades =  [
    ["-", 02, 11, 06, 15, 11, 01],
    [02, "-", 07, 12, 04, 02, 15],
    [11, 07, "-", 11, 08, 03, 13],
    [06, 12, 11, "-", 10, 02, 01],
    [15, 04, 08, 10, "-", 05, 13],
    [11, 02, 03, 12, 05, "-", 14],
    [01, 15, 13, 01, 13, 14, "-"],
]

let matriz = []

for (let i=0; i < 7; i++) {
    matriz.push([]);
    for (let j=0; j < 7; j++) {
        j < i ? matriz[i].push(cidades[i][j]) : matriz[i].push("-")
    }
}

console.log(matriz);