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

let exponenciacao = (x, y) => x**y;

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


/* 5 [INCOMPLETO]*/

let exercicio = 1; // prompt

function exercicios(){

    switch(exercicio){
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

            let linhas = Number(prompt('Informe quantas linha terá o retângulo:'));
            let colunas = Number(prompt('Informe quantas colunas terá o retângulo:'));

            const desenharRetangulo = (linhas,colunas) => {
                let desenho = ''
                for (c=0; c<colunas; c++){
                    if (c === 0 /* || c === colunas - 1 */){
                        desenho += '+'
                    } else if(c === colunas - 1){
                        desenho += '+\n'
                        
                    }else {
                        desenho += '-'
                    }
                    
                }
                console.log(desenho)
            }
            desenharRetangulo(3,5)

        case 3:
        case 4:
        case 5:
        default:
    }
}