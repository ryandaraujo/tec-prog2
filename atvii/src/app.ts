import Processo from "./abstracoes/processo";
import Principal from "./processos/principal";

console.clear()
console.log(`Bem-vindo ao sistema de gestão Atlantis :)`);

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}