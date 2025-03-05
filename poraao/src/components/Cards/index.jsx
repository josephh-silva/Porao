import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal'
import Concert from '../../assets/concert.png'
import Mother from '../../assets/mothe.png'
import Backup from '../../assets/pc.png'
import Clean from '../../assets/pc-torre.png'
import { useEffect } from 'react';


function Cards() {
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.container-card-one', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.container-card-two', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 1500
        });
        reveall.reveal('.container-card-three', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 2000
        });
        reveall.reveal('.container-card-fuor', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 2500
        });
       
       
        
        

    
        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []);
    return (
        <>
            <section className=" conatainer-fluid section-cards ">
                <div className='container-card-one'>
                    <img src={Concert} alt="Img" className='img-card' />
                    <p>Concerto</p>
                    <span>
                        A Porão é especializada em <span className="span-concert">concerto de computadores,</span> <br />
                        oferecendo reparos rápidos e eficientes para problemas de hardware e software. <br />
                        <span className="span-concert">Confie na nossa equipe</span> para manter seu PC funcionando perfeitamente!</span> <br />
                </div>
                <div className='container-card-two'>
                    <img src={Backup} alt="Img" className='img-card' />
                    <p>Backup</p>
                    <span>
                        A Porão oferece serviços de backup de computadores, <br />
                        garantindo a segurança dos seus dados e evitando perdas importantes. <br />
                        Nossa equipe assegura que seus arquivos fiquem protegidos, trazendo tranquilidade.
                    </span>
                </div>
                <div className='container-card-three'>
                    <img src={Clean} alt="Img" className='img-card' />
                    <p>Limpeza</p>
                    <span>
                        A Porão oferece serviços de <span className="span-concert">limpeza de computadores,</span> <br />
                        removendo poeira e sujeira que afetam o desempenho do seu PC. <br />
                        Nossa equipe garante que seu equipamento funcione de forma mais rápida e eficiente, <br />
                        prolongando sua vida!
                    </span>
    
                </div>
                <div className='container-card-fuor'>
                    <img src={Mother} alt="Img" className='img-card' />
                    <p>Troca de peças</p>
                    <span>
                        Oferece serviços substituição de peças de computadores, <br />
                        utilizando componentes de alta qualidade para aprimorar o desempenho, <br />
                        aumentar a confiabilidade e prolongar a vida útil do seu PC, <br />
                        garantindo sempre o melhor.
                    </span>
                </div>
            </section>
        </>
    )
}
export default Cards

