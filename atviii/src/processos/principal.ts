import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import CadastrarAcomodacaoCliente from "./cadastroAcomocacaoCliente"
import CadastroAcomodacoes from "./cadastroAcomodacoes"
import ListagemAcomodacoes from "./listagemAcomodacoes"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoDelecao from "./tipoDeletar"
import TipoEdicao from "./tipoEdicao"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super();
        this.execucao = true;
        this.menu = new MenuPrincipal();
    }
    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Opção desejada');
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente();
                this.processo.processar();
                break;
            case 2:
                this.processo = new TipoEdicao();
                this.processo.processar();
                break;
            case 3:
                this.processo = new TipoListagemClientes();
                this.processo.processar();
                break;
            case 4:
                this.processo = new TipoDelecao();
                this.processo.processar();
                break;
            case 5:
                this.processo = new ListagemAcomodacoes();
                this.processo.processar();
                break;
            case 0:
                this.execucao = false;
                console.log('Até logo!');
                console.clear();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}