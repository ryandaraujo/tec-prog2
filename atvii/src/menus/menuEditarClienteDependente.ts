import Menu from "../interfaces/menu";

export default class MenuEditarClienteDependente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`O que você deseja editar?\n`)
        console.log(`1 - Nome`)
        console.log(`2 - Nome Social`)
        console.log(`3 - Documentos`)
        console.log(`0 - Sair`)
        console.log(`****************************`)
    }
}