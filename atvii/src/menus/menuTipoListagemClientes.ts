import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`Qual o tipo de listagem desejada? `)
        console.log(`1 - Todos os titulares`)
        console.log(`2 - Todos os dependentes`)
        console.log(`3 - Todos os dependentes de um titular específico`)
        console.log(`4 - O titular de um dependente específico`)
        console.log(`****************************`)
    }
}