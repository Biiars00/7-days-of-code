//Arrays e coleções (manipulação de itens)

const listaFrutas = []
const listaLaticionios = []
const listaCongelados = []
const listaLimpeza = []

const contador = "S"

while (contador == "S") {
    const usuario = prompt("Deseja adicionar algum item na sua lista de compras? [S/N]").toUpperCase()
        if(usuario == "S") {
            const itemLista = prompt("Digite o item: ").toUpperCase()
            const categoriaItem = prompt("Em qual categoria o item se encaixa, digite: 1 para Frutas/Verduras, 2 para Laticínios/Perecíveis, 3 para Congelados ou 4 para Produtos de Limpeza.")
                if(categoriaItem == 1) {
                    listaFrutas.push(itemLista)
                    console.log(`Item ${itemLista} adicionado na categoria de Frutas/Verduras.`)
                } else if(categoriaItem == 2) {
                    listaLaticionios.push(itemLista)
                    console.log(`Item ${itemLista} adicionado na categoria de Laticínios/Perecíveis.`)
                } else if(categoriaItem == 3) {
                    listaCongelados.push(itemLista)
                    console.log(`Item ${itemLista} adicionado na categoria de Congelados.`)
                } else if(categoriaItem == 4) {
                    listaLimpeza.push(itemLista)
                    console.log(`Item ${itemLista} adicionado na categoria de Produtos de Limpeza.`)
                } else {
                    console.log("Você precisa digitar uma opção válida!")
                }
        } else if (usuario != "S") {
            alert("Ahhh, que pena! Nenhum item adicionado.")
            break
        } else {
                alert("Digite uma opção válida!")
            }
        console.log(`Lista de compras: ${listaFrutas} | ${listaLaticionios} | ${listaCongelados} | ${listaLimpeza}`)
}

while (contador == "S") {
    const deletarItem = prompt("Deseja remover algum tem da sua lista de compras? [S/N]").toUpperCase()
        if(deletarItem == "S") {
            const categoriaRemoverItem = prompt("O item que deseja remover pertence a qual categoria? [1] Frutas/Verduras, [2] Laticínios/Perecíveis, [3] Congelados ou [4] Produtos de Limpeza.")
                if(categoriaRemoverItem == 1) {
                    const removerItem = prompt("Digite o nome do item a ser removido da sua lista de compras: ").toUpperCase()
                    listaFrutas.includes(removerItem)
                        if(removerItem == listaFrutas) {
                            listaFrutas.splice(listaFrutas.indexOf(removerItem), 1)
                            console.log(`Item removido da sua lista de compras.`)
                        } else {
                            console.log(`Item não localizado na lista.`)
                        }
                } else if(categoriaRemoverItem == 2){
                    const removerItem = prompt("Digite o nome do item a ser removido da sua lista de compras: ").toUpperCase()
                    listaFrutas.includes(removerItem)
                        if(removerItem === listaFrutas) {
                            listaFrutas.splice(listaFrutas.indexOf(removerItem), 1)
                            console.log(`Item removido da sua lista de compras.`)
                        } else {
                            console.log(`Item não localizado na lista.`)
                        }
                } else if(categoriaRemoverItem == 3) {
                    const removerItem = prompt("Digite o nome do item a ser removido da sua lista de compras: ").toUpperCase()
                    listaFrutas.includes(removerItem)
                        if(removerItem === listaFrutas) {
                            listaFrutas.splice(listaFrutas.indexOf(removerItem), 1)
                            console.log(`Item removido da sua lista de compras.`)
                        } else {
                            console.log(`Item não localizado na lista.`)
                        }
                } else if(categoriaRemoverItem == 4) {
                    const removerItem = prompt("Digite o nome do item a ser removido da sua lista de compras: ").toUpperCase()
                    listaFrutas.includes(removerItem)
                        if(removerItem === listaFrutas) {
                            listaFrutas.splice(listaFrutas.indexOf(removerItem), 1)
                            console.log(`Item removido da sua lista de compras.`)
                        } else {
                            console.log(`Item não localizado na lista.`)
                        }
                }         
        } else {
            console.log("Execução interrompida!")
            break
        }
}
console.log(listaFrutas)
console.log(listaLaticionios)
console.log(listaCongelados)
console.log(listaLimpeza)
