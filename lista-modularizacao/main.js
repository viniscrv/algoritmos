/* 1.	Elabore uma função que verifica se um número é perfeito ou não. Número perfeito é um número natural cuja soma dos seus divisores próprios (excluído o próprio número) coincide com o número. */

let num = Number(prompt('Digite um número, para verificar se ele é perfeito ou não:'));

function numeroPerfeito(num){

    let divisoresAnteriores = []; 

    for (i=1; i<=num; i++){
        if(num%i === 0){        
            divisoresAnteriores.push(i);
        }
    }

    divisoresAnteriores.pop();

    let somaDivisores = 0;

    for (k=0; k<divisoresAnteriores.length; k++){
        somaDivisores += divisoresAnteriores[k];
    }

    if (somaDivisores === num){
        return `Número ${num} é um número perfeito`
    } else {
        return `Número ${num} *não* é um número perfeito`
        
    }
}
console.log(numeroPerfeito(num));

/* 2.	Elabore uma função que efetue a exponenciação de um número x por um expoente y (sem usar a função de exponenciação).*/

const exponenciacao = (x, y) => x**y;

/* 3 */

let nota1 = Number(prompt('Informe a *primeira* nota:'));
let nota2 = Number(prompt('Informe a *segunda* nota:'));
let nota3 = Number(prompt('Informe a *terceira* nota:'));
let modelo = Number(prompt('Informe o modelo de médias:\n1- Média Aritmética\n2 - Média Ponderada\n3 - Média Harmônica'));

function media(n1,n2,n3){
    switch(modelo){
        case 1:
            return (n1+n2+n3)/3;
            break;
        case 2:
            let peso1 = 5;
            let peso2 = 3;
            let peso3 = 2;
            return (n1*peso1+n2*peso2+n3*peso3)/(peso1 + peso2 + peso3);
            break;
        case 3: 
            return 3/(1/n1+1/n2+1/n3);
            break;
        default:
            return 'Modelo não encontrado';
    }
}

media(nota1,nota2,nota3);


/* 4 */

function colisao(x2, x1, y2, y1, z2, z1){
    let distancia = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2) + Math.pow(z2-z1,2));

    if (distancia === 0){
        return true;
    } else {
        return false;
    }
}


/* 5.	Desenvolva apenas UM algoritmo que, dependendo da opção que o usuário escolher, execute um dos exercícios abaixo. O programa só deve terminar quando o usuário escolher para sair. Abaixo o exemplo do menu:
1 – Exercício 1
2 – Exercício 2
3 – Exercício 3
4 – Exercício 4
5 – Sair

Exercício 1: Crie um procedimento que solicite 3 valores do usuário e chame uma função que necessite de três argumentos, e que retorne a soma do quadrado desses três parâmetros. Imprima esse resultado na tela.

Exercício 2: Crie um procedimento que peça 2 informações ao usuário: linhas e colunas. Ele deve chamar uma função que desenhe um retângulo na tela usando os caracteres ‘+’ , ‘−’ e ‘| ‘. Esta função deve receber dois parâmetros: linhas e colunas.
Ex.: linhas= 4; colunas = 8
        +------+
        |      |
        |      |
        +------+
Obs: para pular linha: ESCREVA(“\n”);


Exercício 3: Crie um procedimento que pergunte um número ao usuário e chame uma função que informe a quantidade de dígitos de um determinado número inteiro informado. Imprima quantos dígitos tem esse número.

Exercício 4: Crie procedimento(s) e/ou função(ões), a sua escolha, que solicite um número do usuário (n) e imprima:
	
	1
	1	2
	1	2	3
	..	..	..
	1	2	3	..	n

Por exemplo:
n = 6
Imprimir:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 
1 2 3 4 5 6
 */

let escolherExercicio = () => {
    let escolha = 0;

    do {
        escolha = Number(prompt('Escolha um exericio: \n1 - Exercício 01\n2 - Exercício 2\n3 - Exercício 3\n4 - Exercício 4\n 5 - Sair'))
        const exercicios = (escolha) => {

            switch(escolha){
                case 1:
                        let valor1 = Number(prompt('Informe o *primeiro* valor:'));
                        let valor2 = Number(prompt('Informe o *segundo* valor:'));
                        let valor3 = Number(prompt('Informe o *terceiro* valor:'));
                    const valores = (valor1,valor2,valor3) => {
                        let somaValores = Math.pow(valor1,2);
                        somaValores += Math.pow(valor2,2);
                        somaValores += Math.pow(valor3,2);
                        return somaValores;
                    }
                    console.log(valores(valor1,valor2,valor3));
                    break;
                case 2:

                    function pegarDados(){
                        let linhas = Number(prompt('Informe quantas linha terá o retângulo:'));
                        let colunas = Number(prompt('Informe quantas colunas terá o retângulo:')); 

                        const desenharRetangulo = (linhas,colunas) => {
                            let desenho = ''
                            
                            for (l=0; l<linhas; l++){
                                if (l === 0 || l === linhas - 1){
                                    desenho += '+'
                                    for (c=0; c<colunas - 1; c++){
                                        if (c === colunas - 2){
                                            desenho += '+\n'
                                        } else {
                                            desenho += '-'
                                        }
                                    }
                                } else {
                                    desenho += '|'

                                    for (c=0; c<colunas - 1; c++){
                                        if (c === colunas - 2){
                                            desenho += '|\n'
                                        } else {
                                            desenho += ' '
                                        }
                                    }
                                }
                            }
                            return console.log(desenho);
                        }
                        desenharRetangulo(linhas,colunas);
                    }
                    pegarDados();
                    break;
                case 3:

                    function solicitarNumero(){

                        const quantidadeDigitos = (num) => console.log(`Há ${num.length} digitos o número ${num}`);

                        quantidadeDigitos(prompt('Qual número deseja verificar a quanidade de digitos?'));

                        // DEVE ser inteiro?
                    }
                    solicitarNumero();
                    break;
                case 4:
                    function numero(){

                        let numero = prompt('Digite um número: ');

                        let lista = [];

                        for (i=1; i<=numero; i++){
                            lista.push(i);
                        }

                        let novaLista = [];

                        for (k=0; k<lista.length; k++){
                            novaLista.push(lista[k]);
                            console.log(novaLista);
                        }
                    }
                    numero();
                    // formato de array

                    break;

                case 5:
                    alert('Sair');
                    break;
                default:
                console.log('Exercício não existente.')
            }
        } 
        exercicios(escolha);
    } while ( escolha !== 5 )
}
escolherExercicio();
