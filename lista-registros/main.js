/* Crie um programa que cadastre em um registro o nome, o peso e a altura de 5 esportistas.
Apresente na tela a média do peso e a média da altura dos esportistas. */

class Esportista {

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
}

let esportistas = [];

let esportista;

for (let i=0; i < 5; i++) {

    esportista = new Esportista();
    esportista.nome = prompt(`Digite o nome do esportista ${i+1}:`);
    esportista.peso = Number(prompt(`Digite o peso do esportista ${i+1}:`));
    esportista.altura = Number(prompt(`Digite a altura do esportista ${i+1}:`));

    esportistas.push(esportista)
};

let somaPesos = 0;
let somaAlturas = 0;

esportistas.forEach((esportista) => {
    somaPesos += esportista.peso;
    somaAlturas += esportista.altura;
});

console.log(`
    Média de peso dos esportistas: ${somaPesos/esportistas.length}. \n
    Média de altura dos esportistas: ${somaAlturas/esportistas.length}. 
 `)


/* Faça um programa que armazene a matrícula, o nome e o salário de 5 funcionários. Calcule
a média salarial dos funcionarios e apresente na tela os dados dos funcionários e apresente 
na tela os dados dos funcionários que possuem salário abaixo da média. */

class Funcionario {

    constructor (matricula, nome, salario) {

        this.matricula = matricula,
        this.nome = nome,
        this.salario = salario
    }
}

let funcionarios = [];

let funcionario;

for (i=0; i < 2; i++) {

    funcionario = new Funcionario();
    funcionario.matricula = Number(prompt(`Digite a matrícula do funcionário ${i+1}:`));
    funcionario.nome = (prompt(`Digite o nome do funcionário ${i+1}:`));
    funcionario.salario = Number(prompt(`Digite salário do funcionário ${i+1}:`));

    funcionarios.push(funcionario);
}

let somaSalarios = 0;

let funcionariosAbaixo = []; 

funcionarios.forEach((funcionario) => {
    somaSalarios += funcionario.salario;

});

let mediaSalarial = (somaSalarios/funcionarios.length)

funcionarios.forEach((funcionario) => {

    funcionario.salario < mediaSalarial ? funcionariosAbaixo.push(funcionario) : null; 
});

funcionariosAbaixo.forEach((funcionario) => {
    console.log(`Funcionario abaixo da média salarial - [${funcionario.nome}]\n
        Matrícula do funcionário: ${funcionario.matricula}\n
        Salário do funcionário: ${funcionario.salario}\n
        `)
});


/* Elabore um programa que armazene em uma agenda o nome, o endereço e o telefone de 10 pessoas.
Após a leitura de todos os dados, leia do teclado um nome a ser buscado nesta agenda. Se o nome for 
encontrado, apresente todos os dados da pessoa na tela, Senão apresente a mensagem "Nome não encontrado". */

class Registro {
    constructor (nome, endereco, telefone){
        this.nome = nome,
        this.endereco = endereco,
        this.telefone = telefone
    }
}
let agenda = [];
let pessoa;

for (let i=0; i<10; i++){

    pessoa = new Registro();
    pessoa.nome = prompt(`Digite o nome da pessoa [${i+1}] a ser registrada: `);
    pessoa.endereco = prompt(`Digite o endereço da pessoa [${i+1}] a ser registrada: `);
    pessoa.telefone = Number(prompt(`Digite o telefone da pessoa [${i+1}] a ser registrada: `));

    agenda.push(pessoa);
}

const buscarRegistro = () => {

    let nome = prompt("Digite um nome para buscar na agenda: ");

    let encontrados = agenda.filter(registro => registro.nome === nome);

    return encontrados.length >= 1 ? encontrados : "Nome não encontrado";
}

buscarRegistro();


/* Elabore um programa que armazene a matrícula, o nome e o ano de nascimento de 10 pessoas. A seguir:
1. Apresente a matrícula, o nome e a idade das pessoas cadastradas.
2. Apresente a idade média das pessoas cadastradas.
3. Apresente os dados das pessoas cujo ano de nascimento é igual ou superior por um ano informado pelo teclado.
 */

class Cadastro {
    constructor (matricula, nome, anoNascimento) {
        this.matricula = matricula,
        this.nome = nome,
        this.anoNascimento = anoNascimento
    }
}

let cadastros = [];
let pessoa;

for (let i=0; i<2; i++) {
    pessoa = new Cadastro();
    pessoa.matricula = Number(prompt(`Digite a matricula da pessoa [${i+1}]:`));
    pessoa.nome = prompt(`Digite o nome da pessoa [${i+1}]:`);
    pessoa.anoNascimento = Number(prompt(`Digite o ano de nascimento da pessoa [${i+1}]:`));

    cadastros.push(pessoa);
}

soma = 0;

const data = new Date();
const anoAtual = data.getFullYear();

for (let i=0; i<cadastros.length; i++) {

    let idade = (anoAtual - cadastros[i].anoNascimento)
    soma += idade;

    console.log(`
        Registro [${i+1}]\n 
        Matrícula : ${cadastros[i].matricula}\n
        Nome : ${cadastros[i].nome}\n 
        Idade : ${idade}
        `)
}

console.log(`Média de idade entre os cadastros: ${soma/cadastros.length}`);