
/* 1.	Escreva um algoritmo que mostre na tela o quadrado dos números de 15 a 200. */
function expoente2(){
    for (let i = 15; i <=200; i++){
        console.log(i**2);
    }
}

/* 2.	Faça um algoritmo que apresenta na tela a soma obtida dos 100 primeiros números inteiros. Ex.: 1 + 2 + 3 + 4 + 5 + ... + 97 + 98 + 99 + 100
*/
function somaSequencial(){
    let soma = 0;
    for (let i = 1; i <= 100; i++){
        soma += i;
    }
    console.log(soma);
}

/* 3.	Elabore um algoritmo que apresente o somatório dos valores pares existentes entre 1 e 500. */

function somaSequencialPares2(){
    let soma = 0;
    for (let i = 0; i <=500; i++){
        if (i%2===0){
            soma += i;
        }
    }  
    console.log(soma);
}

/* 4.	Faça um algoritmo que apresente todos os números ímpares entre 1 e um número lido do teclado. */
  
function impares(){
    let numero = parseInt(prompt('Digite um número:'));
    for (let i=0; i <= numero; i++){
        if (i%2 === 1){
            console.log(i);
        }
    }
}

/* 5.	Faça um algoritmo que some os números fornecidos pelo usuário até que o número lido seja igual a zero. Ao final, mostre a soma. */

let soma = 0;
let numero;
do {
    numero = parseInt(prompt('Digite um número para ser somado com os anteriores.\nDigite "0" para parar.'));
    soma += numero;
} while (numero != 0);
alert(`Soma total = ${soma}`);



/* 7.	Faça um algoritmo que calcule e apresente a média aritmética de diversos números lidos do teclado. Serão digitados valores até que o usuário digite 0. */
let numeros = [];
let numero;
let soma = 0;

do {
    numero = parseInt(prompt('Adicione um número:'));
    if (numero > 0){
        numeros.push(numero);
    }
} while (numero != 0);
for (let i=0; i<numeros.length; i++){
    soma += numeros[i];
}
alert(`Média aritmética é : ${soma/numeros.length}`)


/* 8.	Elabore um algoritmo que apresente os números pares existentes entre 1 e um número lido do teclado bem como a quantidade de números apresentados.  */

let numero = parseInt(prompt('Digite um numero:'));
let quantidade = 0;
for (let i= 1; i <=numero; i++){
    if (i%2 === 0){
        console.log(i);
        quantidade += 1; 
    }
} 
console.log(`Foram impressos ${quantidade} números.`);

/* 9.    Elabore um algoritmo que apresente na tela a tabuada de um numero lido do teclado*/
function tabuada(){
    let numero = parseInt(prompt('Digite um número:'));

    for (let i=0; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`)
    }
}


/* 10.	Elabore um algoritmo que calcule o valor de uma potenciação (xy), para qualquer y positivo. Não é permitido utilizar a função POT. */

let x = parseInt(prompt('Digite o valor de x:'));
let y = parseInt(prompt('Digite o valor de y:'));
let resultado = x;
for (let i=0; i<=y-2;i++){
    resultado *= x;
}
alert(resultado);

/* 11.	Faça um algoritmo que calcule o fatorial de um número positivo qualquer. 
Ex.: 5! = 5 * 4 * 3 * 2 * 1 = 120  e  0! = 1
 */
function fatorial(){
    let numero = parseInt(prompt('Digite um numero:'));
    let resultado = numero;

    if (numero > 0){
        for (let i=numero-1; i >=1; i--){
            resultado *= i;
        }
    } else if (numero === 0){
        resultado = 1;
    } else {
        alert('Números negativos não são válidos.')
    }

    console.log(resultado);
}

/* 26.	Faça um algoritmo que apresente a seguinte estrutura de menus e sub-menus

1. Inserir          1.1 Inserir aluno           3.1 Excluir Aluno              
2. Consultar        1.2 Inserir professor       3.2 Excluir professor
3. Excluir          1.3 Inserir funcionário     3.3 Excluir funcionário
4. Listar           1.4 Retornar                3.4 Retornar
5. Sair

*/
let escolha;
do {
    escolha = prompt('Escolha uma opção:\n1 - Inserir\n2 - Consultar\n3 - Excluir\n4 - Listar\n5 - Sair');
    switch(escolha){
        case '1':
            let inserir;
            do {
            inserir = prompt('Quem você deseja inserir:\n1.1 - Inserir aluno\n1.2 - Inserir professor\n1.3 - Inserir funcionário\n1.4 - Retornar');
            switch(inserir){
                case '1.1': alert('Inserir aluno'); break;
                case '1.2': alert('Inserir professor'); break;
                case '1.3': alert('Inserir funcionário'); break;
                case '1.4': alert('Retornar'); break;
                default: alert('Opção inválida');
            }
            }while (inserir != '1.4')
            break;
        case '2': alert('Consultar'); break;
        case '3':
            let excluir;
            do {
                excluir = prompt('Quem você deseja excluir:\n3.1 - Excluir aluno\n3.2 - Excluir professor\n3.3 - Excluir funcionário\n3.4 - Retornar')
                switch (excluir){
                    case '3.1': alert('Excluir aluno'); break;
                    case '3.2': alert('Excluir professor'); break;
                    case '3.3': alert('Excluir funcionário'); break;
                    case '3.4': alert('Retornar'); break;
                    default: alert('Opção inválida');
                }
            }while (excluir != 3.4)
            break;
        case '4': alert('Listar'); break;
        case '5': alert('Sair'); break;
        default: alert('Opção inválida');
    }
} while(escolha != 5);

/* 21.	Elabore um algoritmo que apresente o seguinte menu:
1.	Inserir
2.	Excluir
3.	Consultar
4.	Listar 
5.	Sair
Se as opções 1, 2, 3 ou 4 forem escolhidas, mostrar na tela o nome da opção (Inserir, Excluir, Consultar, Listar). Se a opção 5 for escolhida, encerrar a execução do algoritmo.
 */

let escolha;
do {
    escolha = prompt('Escolha uma opção:\n1 - Inserir\n2 - Excluir\n3 - Consultar\n4 - Listar\n5 - Sair');
    switch(escolha){
        case '1': alert('Inserir'); break;
        case '2': alert('Excluir'); break;
        case '3': alert('Consultar'); break;
        case '4': alert('Listar'); break;
        case '5': alert('Sair'); break;
        default: alert('Opção inválida');
    }
} while(escolha != 5);

/* 22.	Faça um algoritmo que apresente na tela o seguinte menu:
1.	Digitar um número ímpar
2.	Digitar um número par
3.	Sair

Caso o usuário escolha a opção 1, ele deve digitar um número ímpar para voltar ao menu. O mesmo deve ser feito na opção 2, mas para um número par. Caso escolha a opção 3, o algoritmo deve apresentar a quantidade de números ímpares digitados na opção 1, a quantidade de números pares digitados na opção 2 e encerrar o algoritmo.
 */

let escolha;
let numImpar = [];
let numPar = [];
do {
    escolha = prompt('Digite uma opção:\n1 - Digitar um número ímpar\n2 - Digitar um número par\n3 - Sair');
    let num;
    switch(escolha){
        case '1': 
            num = prompt('Digite um número ímpar:');
            if (num%2 != 0){
                numImpar.push(num);
            } else {
                alert(`${num} não é um número ímpar`);
            }
        break;
        case '2':
            num = prompt('Digite um número par:');
            if (num%2 == 0){
                numPar.push(num);
            } else {
                alert(`${num} não é um número par`);
            }
        break;
        case '3':
            alert(`No total foram inseridos ${numImpar.length} números ímpares, e ${numPar.length} números pares.`);
        break;
        default: alert('Opção inválida');
    }
} while (escolha != 3);


/* 24.	Elabore um algoritmo que imprima a tabuada do 1 até a tabuada do 10. */

for (let i=1; i<=10; i++){
    console.log(`Tabuada [${i}]`)
    for(let j=1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}


/* 28.	Faça um algoritmo que leia vários números do teclado e apresente o seu fatorial na tela. O processo deve ser encerrado quando for digitado um número negativo.
Ex.: 5! = 5 * 4 * 3 * 2 * 1 = 120, 0! = 1
 */

let numero;
do {
    numero = parseInt(prompt('Digite um numero:\n(Digite um número negativo para parar)'));
    let resultado = numero;

    if (numero > 0){
        for (let i=numero-1; i >=1; i--){
            resultado *= i;
        }
        alert(resultado);
    } else if (numero === 0){
        resultado = 1;
        alert(resultado);
    } else {
        alert('Parar');
    }
} while (numero >= 0);

/* 14.	Elabore um algoritmo que calcule a área total de uma residência (considerando cômodos como cozinha, sala, quarto,...). O algoritmo deve solicitar o nome do cômodo, a largura e o comprimento em metros então apresentar a área do cômodo lido. Na seqüência, o algoritmo deve apresentar uma mensagem solicitando a confirmação para continuar calculando a área de outros cômodos. Se a resposta for “SIM”, deve-se repetir o passo anterior. Se a resposta for “NÃO”, o algoritmo deve apresentar a área total acumulada de todos os cômodos informados. */


let largura;
let comprimento;
let comodoInicial = prompt('Escreva o primeiro cômodo da residência:');
largura = prompt(`Digite a largura em metros de "${comodoInicial}"`);
comprimento = prompt(`Digite o comprimento em metros de "${comodoInicial}"`);
let area = largura*comprimento;
alert(`A área atualmente é de ${area} metros.`);

let adicionar;
do {
    adicionar = prompt('Você deseja adicionar mais cômodos há residência?\n\n-SIM\n-NÃO');
    adicionar = adicionar.toUpperCase();
    if (adicionar === 'SIM'){
        let novoComodo = prompt('Escreva o cômodo da residência:');
        largura = prompt(`Digite a largura em metros de "${novoComodo}"`);
        comprimento = prompt(`Digite o comprimento em metros de "${novoComodo}"`);
        area += largura*comprimento;
    } else if (adicionar === 'NÃO'){
        alert(`Você finalizou o cálculo.\nA área total da residência é de ${area} metros.`);
    }
} while (adicionar != 'NÃO');



/* 6.	Construa um algoritmo que leia 50 números do teclado e apresente na tela o maior e o menor valor lido.
 */

let inicio = parseInt(prompt('Digite um número inicial:'));
let menorNum = inicio;
let maiorNum = 0;
for (let i= -20; i<= inicio+50; i++){
    if (i > maiorNum){
        maiorNum = i;
    } 
    if (i < menorNum){
        menorNum = i;
    }
}
console.log(`Maior número: ${maiorNum}\nMenor número: ${menorNum}`);

/* 12.	Construa um algoritmo que leia uma seqüência de números do teclado até que o usuário digite 0. Sobre os números lidos, apresente na tela:
a.	O menor valor
b.	O maior valor
c.	A soma de todos os valores
d.	A média dos valores
e.	A quantidade de números ímpares
f.	A quantidade de números negativos
 */

let num;
let sequencia = [];
do {
    num = parseInt(prompt('Digite um número para adicionar a sequência:'))
    if (num != 0){
        sequencia.push(num);
        console.log(sequencia);
    }
}while(num != 0);

let menorValor = sequencia[0];
for (let i=0; i < sequencia.length; i++){
    if (sequencia[i] < menorValor){
        menorValor = sequencia[i];
    }
}
console.log(`Menor valor é ${menorValor}`)