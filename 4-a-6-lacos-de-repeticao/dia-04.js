// Jogo de advinhação numérica

alert("Jogo do chutômetroOOO 🎮⚽ ---------- Neste jogo, você tem 3 TENTATIVAS para ADVINHAR o número sorteado. Vamos lá? Boa sorte!!! 🎉")

const numeroSorteado = parseInt(Math.random() * 10)

let tentativa = 1

while (tentativa <= 3) {
    const jogoAdvinhacao = prompt(`${tentativa} tentativa(s). Chute um número entre 0 e 10: `)
        if(jogoAdvinhacao == numeroSorteado) {
            alert(`PARABÉEEENSSS!!! Você acertou! O número sorteado foi ${numeroSorteado}. Você está com sorte!`)
            break
        } else {
            alert(`Ahhh, que pena! Você errou.`)
        }
        tentativa++
    }
    alert(`O número sorteado foi ${numeroSorteado}.`)