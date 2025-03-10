import './index.css'; // Certifique-se de que o CSS acima está neste arquivo
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal';
import Send from './../../assets/send.svg'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



// Array com os textos para o slider
const textSlider = [
    { id: 1, text: "Venda de Aparelhos, Assistência Técnica, Recuperação de Dados, Acessórios, Computadores, Notebooks e Games." },
    { id: 2, text: "Conheça os iPhones novos na KB Tech, unindo design inovador, recursos avançados e a experiência Apple completa." },
    { id: 3, text: "Encontre acessórios originais na Porão, desde capas a fones de ouvido, para melhorar sua experiência." }
];

function Porao() {
    const [sliderPrev, setSliderPrev] = useState(1); // Controla a quantidade de slides visíveis

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

        // Cleanup do ScrollReveal, se necessário
        return () => {
            // Cleanup do ScrollReveal, se necessário
        };
    }, []);

    useEffect(() => {
        const sizeWindow = () => {
            if (window.innerWidth > 320) {
                setSliderPrev(1);  // Mostra apenas 1 slide por vez
            }
        };
        sizeWindow();
        window.addEventListener("resize", sizeWindow); // Adiciona o evento
        return () => {
            window.removeEventListener("resize", sizeWindow); // Remove o evento
        };
    }, []);

    return (
        <>
            <nav className="container-porao">
                <h1>
                    Porão Infocell
                </h1>
                <Swiper
                    slidesPerView={sliderPrev} // Define a quantidade de slides visíveis por vez
                    autoplay={{
                        delay: 5000,  // Tempo entre cada transição
                        disableOnInteraction: false,  // Mantém o autoplay ativo mesmo após interação do usuário
                    }}
                    speed={800}  // Define a duração da animação de transição (em milissegundos)
                    loop={true}  // Ativa o loop para repetir os slides infinitamente
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
                    className=" bt"
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