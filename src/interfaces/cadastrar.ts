import Cliente from "../modelos/cliente";

export default abstract class Cadastro {
    public abstract cadastrar(clientes: Array<Cliente>): void
}