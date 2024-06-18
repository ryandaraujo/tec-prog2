import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`Opções:\n`)
        console.log(`1 - Cadastrar cliente`)
        console.log(`2 - Editar cliente`)
        console.log(`3 - Listar clientes`)
        console.log(`4 - Excluir cliente`)
        console.log(`5 - Listar acomodações`)
        console.log(`0 - Sair`)
        console.log(`****************************`)
    }
}