import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ScrollReveal from 'scrollreveal'
import Samsung from '../../assets/samsung.png'
import Asus from '../../assets/asus.png'
import Microsoft from '../../assets/microsoft.png'
import Apple from '../../assets/apple.png'
import Android from '../../assets/android.png'
import Readmi from '../../assets/readmi.webp'
import Realme from '../../assets/realmecell.jpg'
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
            <h3>PRODUTOS DE <span>QUALIDADE</span> PARA VOCÊ</h3>
            <section className="container-fluid section-three">
                <div className="col-4 realme ">
                        <div className="col-6 texts">
                            <p>READMI</p>
                            <span>TOTALMENTE INCRIVEL, <br /> READMI FEITO PARA TODOS</span>
                            <button><a href="#">Confira Já</a></button>
                        </div>
                        <div className="col-6 image">
                            <img src={Readmi} alt="" className='readmi' />
                        </div>
                    </div>
                <div className="col-4 xiaomi ">
                <div className="col-6 texts">
                            <p>REALME</p>
                            <span>INOVACOR, COM ALTA PERFOMANCE, <br /> QUALIDADE TECNOLOGICA</span>
                            <button><a href="#">Confira Já</a></button>
                        </div>
                        <div className="col-6 image">
                            <img src={Realme} alt="" className='readmi' />
                        </div>
                </div>

            </section>
        </>
    )
}
export default Brands

/*  <div className="col-6 texts">
                            <p>REALMI</p>
                            <span>TOTALMENTE INCRIVEL, <br /> READMI FEITO PARA TODOS</span>
                            <button><a href="#">Confira Já</a></button>
                        </div>*/