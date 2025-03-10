import './index.css'
import ScrollReveal from 'scrollreveal';
import Send from '../../assets/arrow-right.svg'
import Person from '../../assets/person.jpg'
import { useEffect } from 'react';
function AboutUs() {

    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.p1', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.p2', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.p3', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.sp', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.button-send', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.img-about', {
            duration: 2000,
            distance: '10rem',
            origin: 'right',
            delay: 500
        });
        reveall.reveal('.h2-about', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });

        // Cleanup do ScrollReveal, se necessário
        return () => {
            // Cleanup do ScrollReveal, se necessário
        };
    }, []);

    return (
        <>
            <section className='container-fluid container-about'>
                <div className="row">
                    <div className="col-6 about-one " id='aboutUs'>
                        <span className='sp'>PORÃO INFOCELL- SOLUÇÃO DE PONTA A PONTA</span>
                        <h2 className='h2-about'>Sobre Nós</h2>
                        <div className="texts">
                            <p className='p1'>
                                Encontre na Porão a elite da tecnologia Apple, com iPhones <br />
                                e MacBooks, explore também os dispositivos Xiaomi, PCs e <br />
                                notebooks.
                            </p>
                            <p className= 'p2'>
                                Oferecemos acessórios de todos os níveis, dos básicos aos <br />
                                premium, adequados para cada estilo de vida digital.
                            </p>
                            <p className='p3'>
                                Escolha Porão para uma experiência tecnológica completa, <br />
                                do essencial ao excepcional.
                            </p>
                        </div>
                        <button 
                         onClick={() => window.open('https://wa.me/5591983029616', '_blank')}
                         className='button-send'>
                             Saiba mais!
                             <img src={Send} alt="img" className='icon-about'/>
                        </button>
                    </div>
                    <div className="col-6 about-two">
                        <div className="img-about">
                            <img src={Person} alt="person" className='img-person' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs