import { TipoDocumento } from "../enumeracoes/tipoDocumento"
import Cadastro from "../interfaces/cadastrar"
import Entrada from "../io/entrada"
import Atlantis from "../modelos/atlantis"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"

export default class CadastroDependente extends Cadastro {

    public cadastrar(clientes: Array<Cliente>): void {
        let entrada = new Entrada();
        let novoCliente = new Cliente();
        novoCliente.nome = entrada.receberTexto("Nome do dependente");
        novoCliente.nomeSocial = entrada.receberTexto("Nome social");
        novoCliente.dataCadastro = new Date();
        novoCliente.dataNascimento = entrada.receberData("Data de nascimento");
        let novoDocumento = new Documento();
        console.log("Qual tipo de documento você deseja cadastrar?");
        console.log("1 - CPF\n2 - RG\n3 - Passaporte");
        let opcaoDocumento = entrada.receberNumero("Opção");
        novoDocumento.numero = entrada.receberTexto("Digite o número do documento");
        novoDocumento.dataExpedicao = entrada.receberData("Data de expedição do documento");
        switch(opcaoDocumento) {
            case 1: novoDocumento.tipo = TipoDocumento.CPF;
            case 2: novoDocumento.tipo = TipoDocumento.RG;
            case 3: novoDocumento.tipo = TipoDocumento.Passaporte;
        }
        novoCliente.documentos.push(novoDocumento);
        let nomeTitular = entrada.receberTexto("Digite o nome social do titular");
        let listaClientes = clientes;
        let titular = listaClientes.find(cliente => cliente.nomeSocial == nomeTitular);
        if (titular) {
            novoCliente.endereco = titular.endereco.clonar() as Endereco;
            novoCliente.telefones = titular.telefones.map(telefone => telefone.clonar()) as Telefone[]
        } else {
            console.log("TITULAR NÃO ENCONTRADO!");
        }
        clientes.push(novoCliente)
        console.log("Cadastro concluído :)");
    }
}