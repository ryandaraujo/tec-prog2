import Navbar_ from '../../component/barraNavegacao';
import './styles.css'

function Home() {
    return (
        <section>
            <header>
                <Navbar_ />
            </header>
            <main>
                <div className='center'>
                    <div className="text">
                        <h1><strong>Seja bem-vindo ao Atlantis</strong></h1>
                    </div>
                    <div className="text-box">
                        Bem-vindo ao incrível Parque Aquático Atlantis, onde a diversão alcança o 
                        nível máximo de adrenalina e alegria! Situado em um oásis de diversão e 
                        entretenimento, Atlantis é mais que um parque aquático, é uma experiência 
                        de felicidade sem limites!

                        Deslize pelas águas cristalinas de nossos tobogãs emocionantes, mergulhe 
                        em piscinas refrescantes e relaxe em nossas áreas de lazer tropical. 
                        Nossa equipe dedicada está aqui para garantir que cada momento seja 
                        repleto de sorrisos e aventuras inesquecíveis. Para os pequenos 
                        aventureiros, temos áreas exclusivas cheias de jogos interativos e 
                        mini-tobogãs seguros, enquanto os mais corajosos podem desafiar as ondas 
                        em nossa piscina de surf ou se aventurar em nosso rio lento serpenteante.

                        Venha descobrir Atlantis, onde o sol brilha mais forte, as risadas ecoam 
                        mais alto e a diversão nunca tem fim. Prepare-se para um dia cheio de 
                        energia positiva e momentos mágicos. Aqui, cada visita é uma promessa de 
                        memórias inesquecíveis. Junte-se a nós neste paraíso aquático e deixe-se 
                        levar pela magia do Atlantis!
                    </div>
                </div>
            </main>
        </section>
    );
}
export default Home;