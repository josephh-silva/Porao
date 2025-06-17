
import './index.css'
import Samsung from '../../assets/samsung.png'
import Applle from '../../assets/applle.png'
import Microsoft from '../../assets/microsoft.png'
import Dell from '../../assets/dell.png'
import Asus from '../../assets/asus.png'
import Lenovo from '../../assets/lenovo.png'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';


function Bran(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.dell', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.micro', {
            duration: 2000,
            distance: '10rem',
            origin: 'top',
            delay: 500
        });
        reveall.reveal('.samsung', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.asus', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 500
        });
        reveall.reveal('.apple', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom ',
            delay: 500
        });
        reveall.reveal('.lenovo', {
            duration: 2000,
            distance: '10rem',
            origin: 'top ',
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
        <>   
         <section className='section-three bransds' >
                    <div className="row containerB">
                        <div>
                            <h2>ALGUMAS MARCAS QUE SOMOS ESPECIALISTAS</h2>
                        </div>
                        <div className="logos " >
                            <div >
                                <img src={Dell} alt="dell" className='imgs-logo dell' id='dell'/>
                            </div>
                            <div >
                                <img src={Microsoft} alt="microsoft" className='imgs-logo micro' id='micro' />
                            </div>
                            <div >
                                <img src={Samsung} alt="samsung" className='imgs-logo samsung' id='samsung' />
                            </div>
                            <div >
                                <img src={Asus} alt="asus" className='imgs-logo asus' id='asus'/>
                            </div>
                            <div >
                                <img src={Applle} alt="apple" className='imgs-logo apple' id='apple' />
                            </div>
                            <div >
                                <img src={Lenovo} alt="lenovo" className='imgs-logo lenovo' id='lenovo' />
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
export default Bran