import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ScrollReveal from 'scrollreveal'
import Samsung from '../../assets/samsung.png'
import Asus from '../../assets/asus.png'
import Microsoft from '../../assets/microsoft.png'
import Apple from '../../assets/apple.png'
import Android from '../../assets/android.png'
import { useEffect } from 'react';

function Brands() {
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.card1', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.card2', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.card3', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.card4', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.card5', {
            duration: 2000,
            distance: '10rem',
            origin: 'botto ',
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
            <section className="container-fluid section-three">
                <h4 className='title-h4'>Algumas marcas que somos especialistas</h4>
                <div className="row row-container" id='brands'>
                    <div className='brands col-12'>
                        <img src={Microsoft} alt="img" className= 'animation card1 ' />
                        <img src={Apple} alt="img"  className='black card2 animation'/>
                        <img src={Android} alt="img" className='black card3 animation' />
                        <img src={Asus} alt="img"  className='black card4 animation'/>
                        <img src={Samsung} alt="img" className='black card5 animation'/>
                    </div>  
                </div>

            </section>
        </>
    )
}
export default Brands