import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal'
import Whats from '../../assets/whatsapp.png'
import { useEffect } from 'react';

function Porao() {
        useEffect(() => {
            // Inicializa o ScrollReveal dentro do useEffect
            const reveall = ScrollReveal({
                reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
            });
    
            // Coloca as revelações dentro do useEffect
            reveall.reveal('.title', {
                duration: 2000,
                distance: '10rem',
                origin: 'bottom',
                delay: 500
            });
            reveall.reveal('.paragra', {
                duration: 2000,
                distance: '10rem',
                origin: 'bottom',
                delay: 500
            });
            reveall.reveal('.bt', {
                duration: 2000,
                distance: '10rem',
                origin: 'bottom',
                delay: 500
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
            <div className="cntainer-fluid container-porao">
                <h1 className='title'>Porão Infocell</h1>
                <div className="p-t">
                    <p className='paragra'>A sua melhor opção em assistência tecnica </p>
                </div>
                <button
                    class="custom-btn btn-16 bt"
                    onClick={() => window.open('https://wa.me/5591983029616', '_blank')}>
                    <img src={Whats} alt="at" className='whats' />
                    Atendimento
                </button>
            </div>
        </>
    )
}
export default Porao