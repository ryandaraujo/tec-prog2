import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class CadastroEndereco extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('\nEndereço')
        let rua = this.entrada.receberTexto('Rua')
        let bairro = this.entrada.receberTexto('Bairro')
        let cidade = this.entrada.receberTexto('Cidade')
        let estado = this.entrada.receberTexto('Estado')
        let pais = this.entrada.receberTexto('País')
        let codigoPostal = this.entrada.receberTexto('Código postal')
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal)
        this.cliente.Endereco = endereco
    }
}