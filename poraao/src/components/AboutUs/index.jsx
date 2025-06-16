import './index.css';
import ScrollReveal from 'scrollreveal';
import Send from '../../assets/arrow-right.svg';
import PoraoVid from '../../assets/poraovid.mp4';
import { useEffect } from 'react';

function AboutUs() {
    useEffect(() => {
        const reveall = ScrollReveal({
            reset: true,
        });

        reveall.reveal('.p1', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500,
        });
        reveall.reveal('.p2', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500,
        });
        reveall.reveal('.p3', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500,
        });
        reveall.reveal('.sp', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500,
        });
        reveall.reveal('.button-send', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500,
        });
        reveall.reveal('.h2-about', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500,
        });
    }, []);

    return (
        <section className="container-fluid container-about">
            <div className="row">
                <div className="col-8  about-one" id="aboutUs">
                    <span className="sp">PORÃO INFOCELL - SOLUÇÃO DE PONTA A PONTA</span>
                    <h2 className="h2-about">Sobre Nós</h2>
                    <div className="texts">
                        <p className="p1">
                            Encontre na Porão Infocell a elite da tecnologia Apple, com iPhones e MacBooks, e também os dispositivos Xiaomi, PCs e notebooks.
                        </p>
                        <p className="p2">
                            Oferecemos acessórios de todos os níveis, dos básicos aos premium, adequados para cada estilo de vida digital.
                        </p>
                        <p className="p3">
                            Escolha Porão Infocell para uma experiência tecnológica completa, do essencial ao excepcional.
                        </p>
                    </div>
                    <button
                        onClick={() => window.open('https://wa.me/5591983029616', '_blank')}
                        className="button-send"
                    >
                        Saiba mais!
                        <img src={Send} alt="Seta" className="icon-about" />
                    </button>
                </div>

                <div className="col-4  about-two">
                    <div className="video-wrapper">
                        <video
                            src={PoraoVid}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="video-bg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
