import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`Selecione uma opção:\n`)
        console.log(`1 - Cadastrar cliente`)
        console.log(`2 - Editar cliente`)
        console.log(`3 - Listar cliente(s)`)
        console.log(`4 - Excluir cliente`)
        console.log(`0 - Sair`)
        console.log(`****************************`)
    }
}