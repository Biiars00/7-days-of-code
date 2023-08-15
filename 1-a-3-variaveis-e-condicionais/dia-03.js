//Perguntas e respostas - Loop de interação com o usuário

const jogoDePerguntas = prompt("Você deseja seguir para a área de Front-End ou Back-End? Digite 1 para FRONT-END e 2 para BACK-END: ");
    if(jogoDePerguntas == 1) {
        const frontNivel1 = prompt("No Front-End, deseja aprender React ou Vue? Digite 1 para REACT ou 2 para VUE: ");
            if(frontNivel1 == 1) {
                const frontNivel2 = prompt("Deseja seguir se especializando apenas no Front-End ou deseja se tornar Fullstack?")
                alert(`Muito bom! Você terá muito sucesso como ${frontNivel2}.`)
            }
    } else {
        const backNivel1 = prompt("No Back-End, deseja aprender C# ou Java? Digite 1 para C# ou 2 para JAVA: ")
            if(backNivel1 == 1) {
                const backNivel2 = prompt("Deseja seguir se especializando apenas no Back-End ou deseja se tornar Fullstack?")
                alert(`Muito bom! Você terá muito sucesso como ${backNivel2}.`)
            }
    }

const jogoDeRespostas = prompt("Tem mais alguma tecnologia que você gostaria de se especializar ou conhecer? Digite 1 para SIM ou 2 para NÃO: ")
    if(jogoDeRespostas == 1) {
        while (true) {
            const respostasNivel1 = prompt("Informe a tecnologia (Se desejar encerrar, digite SAIR): ").toUpperCase()
            if(respostasNivel1 === "SAIR") {
                console.log("Muito obrigada!")
                break
            }
        }
    } else {
        console.log("Obrigada pela sua participação! Até logo!")
    }