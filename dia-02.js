//Interação com o usuário

const nome = prompt("Qual o seu nome? ");
const idade = prompt("Quantos anos você tem? ");
const linguagem = prompt("Qual linguagem de programação você está estudando? ");

alert(`Olá, ${nome}, você tem ${idade} e está aprendendo ${linguagem}!`);

const perguntaExtra = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para SIM e 2 para NÃO.`);

    if(perguntaExtra == 1) {
        console.log("Muito bom! Continue estudando e você terá muito sucesso!")
    } else {
        console.log("Ahhh, que pena! Já tentou aprender outras linguagens?")
    }