import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[];
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        var processo = false
        let responsavel = this.entrada.receberTexto('Insira o número do documento do cliente responsável')

        console.log('Cadastro de um novo cliente dependente')

        for (let index = 0; index < this.clientes.length; index++) {
            for (let indexDoc = 0; indexDoc < this.clientes[index].Documentos.length; indexDoc++) {
                if (responsavel == this.clientes[index].Documentos[indexDoc].Numero) {
                    processo = true
                    let nome = this.entrada.receberTexto('Nome do novo cliente dependente')
                    let nomeSocial = this.entrada.receberTexto('Nome social do novo cliente dependente')
                    let dataNascimento = this.entrada.receberData('Data de nascimento')

                    let dependente = new Cliente(nome, nomeSocial, dataNascimento)

                    this.processo = new CadastrarDocumentosCliente(dependente);
                    this.processo.processar();

                    dependente.Endereco = this.clientes[index].Endereco.clonar() as Endereco

                    this.clientes[index].Dependentes.push(dependente)

                    console.log('\nCadastro do cliente dependente finalizado')
                }
            }
        }
        if (processo != true) {
            console.log('\nCliente responsável não encontrado :(')
        }
    }
}