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