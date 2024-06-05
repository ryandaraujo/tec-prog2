import CadastroTitular from "./cadastros/cadastroTitular";
import { TipoDocumento } from "./enumeracoes/tipoDocumento";
import Entrada from "./io/entrada";
import Cliente from "./modelos/cliente";
import Documento from "./modelos/documento";
import Endereco from "./modelos/endereco";

let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.titular = cliente
cliente.dependentes.push(dependente)

let entrada = new Entrada()

console.log(cliente);
console.log("###########################");
console.log("Seja bem vindo ao Atlantis!");
console.log("###########################");
console.log("\nMenu princpal");
console.log("1 - Cadastrar titular");
console.log("2 - Cadastrar dependente");
console.log("3 - Listar clientes");
console.log("0 - Sair");


let opcao = entrada.receberNumero("Escolha uma opção")
switch(opcao) {
    case 0:
        break
    case 1:
        let cadastrarTitular = new CadastroTitular()
        cadastrarTitular.cadastrar()
}
