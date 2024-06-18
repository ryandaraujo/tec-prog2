import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefone extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('\nTelefone')

        let quantidade = this.entrada.receberNumero('Quantos telefones serão cadastrados?')

        for (let index = 0; index < quantidade; index++) {
            let ddd = this.entrada.receberTexto('DDD')
            let numero = this.entrada.receberTexto('Número')
            let telefone = new Telefone(ddd, numero)

            this.cliente.Telefones.push(telefone)
        }
    }
}