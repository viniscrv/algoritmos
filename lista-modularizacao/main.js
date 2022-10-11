/* 1 */

let num = Number(prompt('Digite um número, para verificar se ele é perfeito ou não:'));

function numeroPerfeito(){

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

console.log(numeroPerfeito());

/* 2 */

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