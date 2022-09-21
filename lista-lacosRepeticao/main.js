
/* 1.	Escreva um algoritmo que mostre na tela o quadrado dos números de 15 a 200. */
for (let i = 15; i <=200; i++){
    console.log(i**2);
}

/* 2.	Faça um algoritmo que apresenta na tela a soma obtida dos 100 primeiros números inteiros. Ex.: 1 + 2 + 3 + 4 + 5 + ... + 97 + 98 + 99 + 100
*/
let soma = 0;
for (let i = 1; i <= 100; i++){
    soma += i;
}
console.log(soma);

/* 3.	Elabore um algoritmo que apresente o somatório dos valores pares existentes entre 1 e 500. */

let soma = 0;
for (let i = 0; i <=500; i++){
    if (i%2===0){
        soma += i;
    }
}  
console.log(soma);

/* 4.	Faça um algoritmo que apresente todos os números ímpares entre 1 e um número lido do teclado. */
  
let numero = parseInt(prompt('Digite um número:'));
for (let i=0; i <= numero; i++){
    if (i%2 === 1){
        console.log(i);
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

/* 12.	do teclado até que o usuário digite 0. Sobre os números lidos, apresente na tela: Construa um algoritmo que leia uma seqüência de números
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
    num = parseInt(prompt('Digite um número para adicionar a sequência:'));
    if (num != 0){
        sequencia.push(num);
        console.log(sequencia);
    }
} while (num != 0);

let menorValor = sequencia[0];
let maiorValor = sequencia[0];
let soma = 0;
let numImpar = 0;
let numNegativo = 0;
for (let i=0; i<sequencia.length;i++){
    soma += sequencia[i];
    if (sequencia[i]%2 != 0){
        numImpar += 1;
    }    
    if (sequencia[i] < 0){
        numNegativo +=1;
    }
    if (sequencia[i] < menorValor){
        menorValor = sequencia[i];
    }
    if (sequencia[i] > maiorValor){
        maiorValor = sequencia[i];
    }
}
console.log(`Menor valor é ${menorValor}`);
console.log(`Maior valor é ${maiorValor}`);
console.log(`Soma de todos os valores é ${soma}`);
console.log(`Média aritmética entre todos os valores é ${soma/sequencia.length}`);
console.log(`Foram encontrados ${numImpar} números ímpares`);
console.log(`Foram encontrados ${numNegativo} números negativos`);


/* 13.	Em uma cidade com 1000 eleitores, as opções de voto em uma eleição são:
•	11: João da Silva
•	22: José da Silva
•	33: Juca da Silva
•	0: voto branco
•	qualquer outro valor: voto nulo.

Elabore um algoritmo que leia o voto de todos os eleitores e apresente o percentual de votos de cada candidato, o percentual de votos brancos e o percentual de votos nulos. Se um dos candidatos tiver vencido a eleição (mais de 50% dos votos), mostre o seu nome. Caso contrário, mostre a mensagem “Eleição sem candidato vencedor”.
 */

let joaoSilva = 0;
let joseSilva = 0;
let jucaSilva = 0;
let votoBranco = 0;
let votoNulo = 0;
let i = 1;
let voto;
do {
    voto = prompt('Informe o candidato escolhido:');
    switch(voto){
        case '11': joaoSilva +=1; break;
        case '22': joseSilva +=1; break;
        case '33': jucaSilva +=1; break;
        case '0': votoBranco +=1; break;
        default: votoNulo +=1; break;
    }
    i++
}while(i<=1000);

let candidatos = {
    'João da Silva': `${(joaoSilva/1000)*100}%`,
    'José da Silva': `${(joseSilva/1000)*100}%`,
    'Juca da Silva': `${(jucaSilva/1000)*100}%`,
    'Voto Branco': `${(votoBranco/1000)*100}%`,
    'Voto nulo': `${(votoNulo/1000)*100}%`
}
console.table(candidatos);

if ((joaoSilva/10)*100 > 50){
    console.log('João da Silva venceu a eleição');
} else if ((joseSilva/10)*100 > 50){
    console.log('José da Silva venceu a eleição');
} else if ((jucaSilva/10)*100 > 50){
    console.log('Juca da Silva venceu a eleição');
} else {
    console.log('Eleição sem candidato vencedor');
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

/* 20.	Elabore um algoritmo que leia uma seqüência de números do teclado até que o usuário digite um número negativo. Sobre os números lidos, apresente:
•	O percentual de números pares
•	A média dos números
•	O percentual de números acima de 50
 */

let num;
let numeros = [];
let numerosPares = 0;
let numerosAcima50 = 0;
do {
    num = parseInt(prompt('Digite um número para adicionar a sequência:\nDigite um número negativo para parar'));
    if (num >= 0){
        numeros.push(num);
        if (num%2 == 0){
            numerosPares += 1;
        }
        if (num > 50){
            numerosAcima50 += 1;
        }
    }
}while (num >= 0);

let soma = 0;
for (let i=0; i<numeros.length; i++){
    soma += numeros[i]; 
}
let porcentagemPares = (numerosPares/numeros.length)*100;
let porcentagemAcima50 = (numerosAcima50/numeros.length)*100;

console.log(`A porcentagem de números pares é ${porcentagemPares.toFixed(2)}%`);
console.log(`A média dos números é ${soma/numeros.length}`);
console.log(`A porcentagem de números acima de 50 é ${porcentagemAcima50.toFixed(2)}%`);

/* 23.	Foi aplicado o provão em uma instituição de ensino com 50 turmas. Faça um algoritmo que leia a quantidade de alunos em cada turma e, para cada aluno, leia a nota de 3 provas. Apresente na tela a média aritmética de cada turma e a porcentagem de alunos que obteve média superior a 7.0. Deve-se ler os dados de uma turma e apresentar o seu resultado na tela. */
let quantidadeAlunosTotal = 0;
let quantidadeAlunos;
let alunoAcimaMedia = 0;
for (let i=1; i<=50; i++){ 
    alert(`Turma ${i}`);
    quantidadeAlunos = parseInt(prompt(`Informe quantos alunos há na turma ${i} :`));
    console.log(`Turma ${i} tem ${quantidadeAlunos} alunos`);
    let mediaTurma = [];
    let somaMediaTurma = 0;
    for(let j=1; j<=quantidadeAlunos; j++){
        let nota1 = parseInt(prompt(`Informe nota 1 de aluno ${j} :`));
        let nota2 = parseInt(prompt(`Informe nota 2 de aluno ${j} :`));
        let nota3 = parseInt(prompt(`Informe nota 3 de aluno ${j} :`));
        let media = (nota1+nota2+nota3)/3;
        mediaTurma.push(media);
        if (media >= 7){
            alunoAcimaMedia += 1;
        }
    }
    for (let z=0; z < mediaTurma.length; z++){
        somaMediaTurma += mediaTurma[z];
    }
    quantidadeAlunosTotal += quantidadeAlunos;

    console.log(`Media da turma ${i} é ${(somaMediaTurma/mediaTurma.length).toFixed(2)}`)
}
let porcentagemAlunoAcimaMedia = (alunoAcimaMedia/quantidadeAlunosTotal)*100;

console.log(`Existem ${quantidadeAlunosTotal} alunos na instituição`);
console.log(`${porcentagemAlunoAcimaMedia}% alunos na instituição ficaram acima da média`);

/* 15.	Será realizada uma pesquisa na UP com o objetivo de obter o perfil dos alunos dos cursos de tecnologia. Os 200 alunos entrevistados deverão informar:
•	sexo (F: feminino, M: masculino);
•	idade;
•	estado civil (S: solteiro, C: casado, V: viúvo e D: desquitado).
Com base nesta pesquisa, elabore um algoritmo que apresente:
•	quantas pessoas do sexo feminino são casadas;
•	quantas pessoas do sexo masculino com idade entre 17 e 25 anos são solteiros;
•	quantas pessoas de ambos os sexos com idade acima de 30 anos são solteiras.
 */

let aluno = [
    {
        sexo: null,
        idade: null,
        estadoCivil: null
    },
]
let femCasada = 0;
let mas17e25 = 0;
let acima30 = 0;
let i = 1;
do {
    let novoAluno = {};
    novoAluno.sexo = prompt(`[ALUNO ${i}]\n\nInforme o sexo:\n\nF: feminino, M: masculino`);
    novoAluno.idade = parseInt(prompt(`[ALUNO ${i}]\n\nInforme a idade:`));
    novoAluno.estadoCivil = prompt(`[ALUNO ${i}]\n\nInforme o estado civil:\n\nS: solteiro, C: casado, V: viúvo e D: desquitado`);

    if (novoAluno.sexo == 'F' && novoAluno.estadoCivil == 'C'){
        femCasada += 1;
    }
    if (novoAluno.sexo == 'M' && novoAluno.idade >= 17 && novoAluno.idade <= 25){
        mas17e25 += 1;
    }
    if(novoAluno.idade > 30  && novoAluno.estadoCivil == 'S'){
        acima30 += 1;
    }
    aluno.push(novoAluno);
    i++
}while(i<=200);

console.log(`são ${femCasada} pessoas do sexo feminino e casadas`);
console.log(`são ${mas17e25} pessoas do sexo masculino e estão entre 17 e 25 anos`);
console.log(`são ${acima30} pessoas com idade acima de 30 anos e solteiras`);

/* 16.	Uma pesquisa sobre características físicas da população de Curitiba considerou os seguintes dados referentes a cada entrevistado:
•	sexo (feminino, masculino)
•	cor dos olhos (azuis, verdes, castanhos)
•	cor dos cabelos (louros, castanhos, pretos)
•	idade em anos
Considerando que os dados foram lidos até que foi informada a idade igual a -1, faça um algoritmo que determine e apresente:
•	a média de idade dos entrevistados
•	a porcentagem de indivíduos do sexo feminino cuja idade está entre 18 e 35 anos (inclusive) e que tenham olhos verdes e cabelos louros.
•	a porcentagem de indivíduos do sexo masculino cujos olhos são verdes e os cabelos são pretos.
 */

let pessoas = [
    {
        idade : null,
    },
]
let femVerdesLouros = 0;
let masVerdesPretos = 0;
let i = 0;
do {
    let novaPessoa = {};
    novaPessoa.sexo = prompt('Informe o sexo:\n\nF - feminino, M - masculino');
    novaPessoa.corOlhos = prompt('Informe a cor de seus olhos:\n\nazuis, verdes ou castanhos');
    novaPessoa.corCabelo = prompt('Informe a cor de seu cabelo:\n\nlouros, castanhos ou pretos');
    novaPessoa.idade = parseInt(prompt('Informe sua idade:'));
    if (novaPessoa.sexo == 'F' && novaPessoa.idade > 18 && novaPessoa.idade < 35){
        if (novaPessoa.corOlhos == 'verdes' && novaPessoa.corCabelo == 'louros'){
            femVerdesLouros += 1;
        }
    }
    if (novaPessoa.sexo == 'M' && novaPessoa.corOlhos == 'verdes' && novaPessoa.corCabelo == 'pretos'){
        masVerdesPretos += 1;
    }
    pessoas.push(novaPessoa);
    i++
} while (pessoas[i].idade != -1);
pessoas.pop();

let idades = [];
for (j=1; j<pessoas.length;j++){
    idades.push(pessoas[j].idade);
}
let soma = 0;
for (k=0; k<idades.length;k++){
    soma += idades[k];
}
let mediaIdades = soma/idades.length;
let quantidadePessoas = pessoas.length-1;
let porcentFemVerdesLouros = (femVerdesLouros/quantidadePessoas)*100;
let porcentMasVerdesPretos = (masVerdesPretos/quantidadePessoas)*100;

console.log(`A média da idade dos entrevistados é ${mediaIdades}`);
console.log(`A porcentagem de mulheres entre 18 e 35 anos, com olhos verdes e cabelo louros é ${porcentFemVerdesLouros}%`);
console.log(`A porcentagem de homens com olhos verdes e cabelos pretos é ${porcentMasVerdesPretos}%`);
