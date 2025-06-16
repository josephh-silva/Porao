import './index.css'; // CSS do componente
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal';
import Send from './../../assets/send.svg';
import Video from '../../assets/backnav.mp4'; // vídeo importado
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Array com os textos para o slider
const textSlider = [
    { id: 1, text: "Venda de Aparelhos, Assistência Técnica, Acessórios, Computadores, Notebooks e Games." },
    { id: 2, text: "Conheça os iPhones novos na Porão, unindo design inovador, recursos avançados e a experiência Apple completa." },
    { id: 3, text: "Encontre acessórios originais na Porão, desde capas a fones de ouvido, para melhorar sua experiência." }
];

function Porao() {
    const [sliderPrev, setSliderPrev] = useState(1);

    useEffect(() => {
        const reveall = ScrollReveal({ reset: true });

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
    }, []);

    useEffect(() => {
        const sizeWindow = () => {
            if (window.innerWidth > 320) {
                setSliderPrev(1);
            }
        };
        sizeWindow();
        window.addEventListener("resize", sizeWindow);
        return () => {
            window.removeEventListener("resize", sizeWindow);
        };
    }, []);

    return (
        <>
            <nav className="container-porao">
                {/* Vídeo de fundo */}
                <video className="bg-video" autoPlay muted loop playsInline>
                    <source src={Video} type="video/mp4" />
                    Seu navegador não suporta vídeo em HTML5.
                </video>

                {/* Conteúdo principal */}
                <h1 className='title'>Porão <span>Infocell</span></h1>

                <Swiper
                    slidesPerView={sliderPrev}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={800}
                    loop={true}
                    className="container"
                >
                    {textSlider.map((texts) => (
                        <SwiperSlide key={texts.id} className="texts-sliders">
                            <div className="text-car">
                                <h2>{texts.text}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="bt"
                    onClick={() => window.open('https://wa.me/5591983029616', '_blank')}>
                    <img src={Send} alt="at" className='whats' />
                    Atendimento
                </button>
            </nav>
        </>
    );
}

export default Porao;




/*
 <div className="cntainer-fluid container-porao">
                <h1 className='title'>Porão Infocell</h1>
                <div className="p-t">
                    <p className='paragra'>A sua melhor opção em assistência tecnica </p>
                </div>
            </div>
 */