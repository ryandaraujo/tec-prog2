import Cliente from "./cliente";

export default class Atlantis {
    private clientes!: Array<Cliente>

    constructor() {
        this.clientes = []
    }

    public getClientes() {
        return this.clientes
    }
    public adicionarCliente(cliente: Cliente) {
        this.clientes.push(cliente)
    }
}