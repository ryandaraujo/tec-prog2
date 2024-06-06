import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import Cadastro from "../interfaces/cadastrar";
import Entrada from "../io/entrada";
import Atlantis from "../modelos/atlantis";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

export default class CadastroTitular extends Cadastro {

    public cadastrar(clientes: Array<Cliente>): void {
        let entrada = new Entrada()
        let novoCliente = new Cliente()
        novoCliente.nome = entrada.receberTexto("Nome do titular")
        novoCliente.nomeSocial = entrada.receberTexto("Nome social")
        novoCliente.dataCadastro = new Date()
        novoCliente.dataNascimento = entrada.receberData("Data de nascimento")
        let novoDocumento = new Documento()
        console.log("Qual tipo de documento você deseja cadastrar?");
        console.log("1 - CPF\n2 - RG\n3 - Passaporte");
        let opcaoDocumento = entrada.receberNumero("Opção")
        novoDocumento.numero = entrada.receberTexto("Digite o número do documento")
        novoDocumento.dataExpedicao = entrada.receberData("Data de expedição do documento")
        switch(opcaoDocumento) {
            case 1: novoDocumento.tipo = TipoDocumento.CPF
            case 2: novoDocumento.tipo = TipoDocumento.RG
            case 3: novoDocumento.tipo = TipoDocumento.Passaporte
        }
        novoCliente.documentos.push(novoDocumento)
        console.log("Endereço");
        let novoEndereco = new Endereco()
        novoEndereco.codigoPostal = entrada.receberTexto("Informe o CEP")
        novoEndereco.pais = entrada.receberTexto("Informe o país")
        novoEndereco.estado = entrada.receberTexto("Informe o estado")
        novoEndereco.cidade = entrada.receberTexto("Informe a cidade")
        novoEndereco.bairro = entrada.receberTexto("Informe o bairro")
        novoEndereco.rua = entrada.receberTexto("Informe a rua")
        novoEndereco.numero = entrada.receberTexto("Informe o número")
        novoCliente.endereco = novoEndereco
        let novoTelefone = new Telefone()
        novoTelefone.ddd = entrada.receberTexto("DDD do telefone")
        novoTelefone.numero = entrada.receberTexto("Número do telefone")
        novoCliente.telefones.push(novoTelefone)

        clientes.push(novoCliente);
        console.log("Cadastro concluído :)");
    }
}