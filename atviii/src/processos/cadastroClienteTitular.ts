import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastrarAcomodacaoCliente from "./cadastroAcomocacaoCliente";
import CadastroEndereco from "./cadastroEndereco";
import CadastroTelefone from "./cadastroTelefone";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Cadastro de um novo cliente')
        let nome = this.entrada.receberTexto('Nome do novo cliente')
        let nomeSocial = this.entrada.receberTexto('Nome social do novo cliente')
        let dataNascimento = this.entrada.receberData('Data de nascimento')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEndereco(cliente)
        this.processo.processar()

        this.processo = new CadastroTelefone(cliente)
        this.processo.processar()

        this.processo = new CadastrarAcomodacaoCliente(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('\ncadastro do cliente finalizado\n')
    }
}