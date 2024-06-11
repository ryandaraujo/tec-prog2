import Menu from "../interfaces/menu";

export default class MenuTipoEdicao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`Qual o tipo do cliente que será editado?\n`)
        console.log(`1 - Titular`)
        console.log(`2 - Dependente`)
        console.log(`****************************`)
    }
}