import Menu from "../interfaces/menu";

export default class MenuTipoAcomodacao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`Qual o tipo de acomodação deseja?\n`)
        console.log(`1 - Casal Simples`)
        console.log(`2 - Familia Simples`)
        console.log(`3 - Familia Mais`)
        console.log(`4 - Familia Super`)
        console.log(`5 - Solteiro Simples`)
        console.log(`6 - Solteiro Mais`)
        console.log(`0 - Finalizar cadastro de acomodações`)
        console.log(`****************************`)
    }
}