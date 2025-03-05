import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

function About(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.text-p', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 500
        });
        reveall.reveal('.h3', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.span-t', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 500
        });
        
        
        

    
        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []);
    return(
        <section className=' container-fluid about-us '>
            <div className="text-about">
                <p className='text-p'>A melhor assistência técnica para seus dispositivos! Reparos rápidos e de qualidade.</p>
                <h3 className='h3'>
                Conserte Seu Dispositivo com Quem Entende!
                </h3>
                <span className='span-t'>
                    Deixe seu aparelho em boas mãos! <br />
                    Oferecemos reparos rápidos e serviços de qualidade, <br />
                    sempre com garantia e confiança.
                </span>
            </div>
        </section>
    )
}
export default About