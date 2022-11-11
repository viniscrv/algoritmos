/* 2. Faça um algoritmo que leia um vetor de 5 números inteiros e mostre-os.  */

let numeros = [];
let num = 0;

do {
    num = parseInt(prompt("Adicione um valor: "));
    numeros.push(num);
}while (numeros.length < 5);

for (let i= 0; i<numeros.length; i++) {
    console.log(numeros[i]);
}

/* Faça um algoritmo que leia um vetor de 10 números reais e mostre-os em ordem inversa */

let numeros = [];
let num = 0;

do {
    num = Number(prompt("Adicione um valor: "));
    numeros.push(num);

} while (numeros.length < 10);

for (let i= numeros.length; i >= 0; i--) {
    console.log(numeros[i]);
}

/* Faça um programa que leia 4 notas, armazenadas em um vetor, mostre as notas e a média na tela. */


let notas = [];
let nota = 0;

do {

    nota = Number(prompt(`Informe a nota: ${notas.length + 1} `));
    if ( nota >= 0 && nota <= 10){
        notas.push(nota);
    }

} while (notas.length < 4);


let media = 0;
for (let i=0; i<=notas.length; i++) {
    if (i !== notas.length){
        console.log(`Nota ${i+1} : ${notas[i]}`);
        media += notas[i]
    }
    else {
        console.log(`Média das notas é: ${media/notas.length}`);
    }
}

/* Faça um propgrama que leia 20 valores inteiros e armazene-os num vetor. Armaze os números 
pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.
 */
let todosNumeros = [];
let pares = [];
let impares = [];
let num = 0;
do {
   num = parseInt(prompt("Adicione um número: "));
   todosNumeros.push(num);
   if (num % 2 === 0) {
       pares.push(num);
   } else {
       impares.push(num);
   }

}while (todosNumeros.length < 20);

console.log("Número total de números informados: ", todosNumeros);
console.log("Total de números pares informados: ", pares);
console.log("Total de números ímpares informados: ", impares);
/* Construa um algoritmo que leia um vetor de 15 posições e calcule a média destes vetores
. Na sequência, apresente na tela os vetores que são iguais ou superiores á média

*/


/* Faça um algoritmo que leia 20 números do teclado e os armazene em um vetor. Crie um segundo 
vetor de 20 posições que armazene o dobro de cada um do números do primeiro vetor e apresente este vetor.
*/

let lista = [];
let num = 0;

do {
   num = Number(prompt("Adicione um valor à lista: "));
   lista.push(num);

} while (lista.length < 20)

let valoresDobrados = lista.map(item => item * 2 );

console.log("Novo vetor com os valores dobrados: ", valoresDobrados);


/* Elabore um algoritmo que leia 50 números do teclado e os armazene em um vetor. Em seguida,
leia um número n qualquer e apresesnte na tela a quantidade de vezes que o número n aparece 
no vetor.
*/

let numeros = [];
let num = 0;

do {

   num = Number(prompt(`Adicione o [${numeros.length + 1 }]° número ao vetor: `));
   numeros.push(num);

} while (numeros.length < 5)

let n = Number(prompt("Digite o número a ser análisado:"))
let quantidadeRepetida = 0;

for (let i=0; i < numeros.length; i++) {
   if (n === numeros[i]){
       quantidadeRepetida += 1;
   }
}

console.log("Número de vezes que o número informado repete no vetor: ", quantidadeRepetida);

/* Crie um algoritmo que leia o vetor com 1000 números e some apenas os elementos positivos 
que estão nas posições pares
 */

let numeros = [];
let num = 0;

 do {
    num = Number(prompt("Digite um número para adicionar a lista: "));
    numeros.push(num)
 } while (numeros.length < 5);

let soma = 0;

for (let i=0; i < numeros.length; i++) {
    if (i % 2 === 0) {
        if (numeros[i] >= 0) {
            soma += numeros[i];
        }
    }
}

/* Faça um algoritmo que leia um vetor A de 30 números. Armazene em um vetor B o maior elemento de A, 
o menor elemento de A, a soma dos elementos de A e média dos elementos de A. Apresente o vetor B na tela. */


let vetorA = [];
let vetorB = [];
let num;

do {
    num = Number(prompt("Digite um número para adicionar ao vetor A: "));
    vetorA.push(num);
} while (vetorA.length < 6);

let maiorValor = vetorA[0];
let menorValor = vetorA[0];
let soma = 0;

for (let i=0; i < vetorA.length; i++) {

    vetorA[i] > maiorValor ? maiorValor = vetorA[i] : null;

    vetorA[i] < menorValor ? menorValor = vetorA[i] : null;

    soma += vetorA[i];
}

let media = soma/vetorA.length;

vetorB.push(maiorValor);
vetorB.push(menorValor);
vetorB.push(soma);
vetorB.push(media);

console.log(vetorB);

/* Crie um algoritmo que leia um vetor A de 10 posições diferentes do teclado e, ao final da leitura,
copie os elementos de A em B de forma invertida. Ou seja, o primeiro elemento de A é o último de B,
o segundo elemento de A é o penúltimo elemento de B, e assim por diante. 
 */

let vetorA = [];
let vetorB = [];
let num;

do {
    num = Number(prompt("Digite um número para ser adicionado ao vetor A: "));
    vetorA.push(num);

} while (vetorA.length < 10);

for (let i=vetorA.length - 1; i >= 0; i--) {
    vetorB.push(vetorA[i]);
}

console.log(vetorB);
 