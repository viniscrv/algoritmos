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

/* 3.	Faça um algoritmo que leia 3 notas de um aluno e um quarto número que representa o modelo de média a ser calculada. Caso o modelo seja igual a 1, calcular a média aritmética; caso seja igual a 2, calcular a média ponderada com pesos iguais a 5, 3 e 2; caso seja igual a 3, calcular a média harmônica. Repetir este procedimento até que uma das notas informadas seja menor que 0.*/

function media(){

    let modelo;
    let n1;
    let n2;
    let n3;

    do {
        n1 = Number(prompt('Informe a *primeira* nota:'));
        n2 = Number(prompt('Informe a *segunda* nota:'));
        n3 = Number(prompt('Informe a *terceira* nota:'));
        modelo = Number(prompt('Informe o modelo de médias:\n1- Média Aritmética\n2 - Média Ponderada\n3 - Média Harmônica'));

        switch(modelo){
            case 1:
                console.log( (n1+n2+n3)/3);
                break;
            case 2:
                let peso1 = 5;
                let peso2 = 3;
                let peso3 = 2;
                console.log( (n1*peso1+n2*peso2+n3*peso3)/(peso1 + peso2 + peso3) );
                break;
            case 3: 
                console.log( 3/(1/n1+1/n2+1/n3) );
                break;
            default:
                console.log( 'Modelo não encontrado');
        }

    } while (n1 > 0 && n2 > 0 && n3 > 0);
}

/* 4.	Você está desenvolvendo um jogo em 3 dimensões no estilo do Counter-Strike. Nesse momento do desenvolvimento é necessário criar uma função de colisão. Essa função deverá receber as coordenadas em 3 dimensões de 2 pontos e a função deve retornar se colidiu ou não (VERDADEIRO ou FALSO). Dessa forma, sua função servirá para as seguintes situações, por exemplo:
•	Um tiro acertando um oponente;
•	Você está encostando em uma parede;
•	Você recebendo um tiro;
•	Você pulando e caindo no chão;
•	Você recebendo estilhaços de uma granada que explodiu perto;
•	E todas as demais situações de colisão do jogo.
Para isso você deve considerar:
•	que coordenadas tridimensionais são compostas de 3 informações, dessa forma: (x,y,z);
•	a fórmula abaixo para cálculo da distância, ou seja, se o d for 0 é sinal que está colidindo.
*/

function colisao(x2, x1, y2, y1, z2, z1){
    let distancia = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2) + Math.pow(z2-z1,2));

    return distancia === 0 ? true : false
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

const escolherExercicio = () => {
    let escolha = 0;

    do {
        escolha = Number(prompt('Escolha um exericio: \n1 - Exercício 01\n2 - Exercício 02\n3 - Exercício 03\n4 - Exercício 04\n 5 - Sair'))
        const exercicios = (escolha) => {

            switch(escolha){
                case 1:
                    const pegarValores = () => {
                        let valor1 = Number(prompt('Informe o *primeiro* valor:'));
                        let valor2 = Number(prompt('Informe o *segundo* valor:'));
                        let valor3 = Number(prompt('Informe o *terceiro* valor:'));
                        const valores = (v1,v2,v3) => {
                            let somaValores = Math.pow(v1,2);
                            somaValores += Math.pow(v2,2);
                            somaValores += Math.pow(v3,2);
                            return somaValores;
                        }
                        console.log(valores(valor1,valor2,valor3));
                    }
                    pegarValores();
                    break;
                case 2:
                    const pegarDados = () => {
                        let linhas = Number(prompt('Informe quantas linha terá o retângulo:'));
                        let colunas = Number(prompt('Informe quantas colunas terá o retângulo:')); 

                        const desenharRetangulo = (linhas,colunas) => {
                            let desenho = '';
                            
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
                    const solicitarNumero = () => {

                        const quantidadeDigitos = (num) => console.log(`Há ${num.length} digitos o número ${num}`);
                        
                        quantidadeDigitos(prompt('Qual número deseja verificar a quanidade de digitos?'));
                    }
                    solicitarNumero();
                    break;
                case 4:
                    const numero = () => {

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
                    break;

                case 5:
                    alert('Sair');
                    break;
                default:
                alert('Exercício não existente.')
            }
        } 
        exercicios(escolha);
    } while ( escolha !== 5 )
}
escolherExercicio();
