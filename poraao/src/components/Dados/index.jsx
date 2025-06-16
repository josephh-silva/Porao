import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal'
import './index.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Like from '../../assets/like.svg'
import Star from '../../assets/star.svg'
import User from '../../assets/user.svg'

import Car1 from '../../assets/car1.jpg'
import Car2 from '../../assets/car2.jpg'
import Car3 from '../../assets/car3.jpg'
import Car4 from '../../assets/car4.jpg'
import Car5 from '../../assets/car5.jpg'

const imgsCars = [
    { id: 1, img: Car1 },
    { id: 2, img: Car2 },
    { id: 3, img: Car3 },
    { id: 4, img: Car4 },
    { id: 5, img: Car5 }
]


function Dados() {
    const [sliderPrev, setSliderPrev] = useState(1); // Controla a quantidade de slides visíveis

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

    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.span-tt', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 500
        });
        reveall.reveal('.text-pp', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 1500
        });





        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []);

    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.infos', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
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
            <section className="backup container-fluid ">
                <div className="row container-full">
                    <div className="infos-car col-8">
                        <div className="text-back col-4 " id='diferents'>
                            <div className="header-text ">
                                <span className='span-tt'>NOSSOS <span className='one'>DIFERENCIAIS</span></span>
                                <p>
                                    Descubra o que nos diferencia <br />
                                    dos nossos concorentes
                                </p>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="icon">
                                <img src={User} alt="icon" className='icon-car' />
                            </div>
                            <div className="info-text">
                                <h3>ATENDIMENTO ÚNICO </h3>
                                <p>
                                    Na Porão, entendemos que cada cliente tem necessidades únicas. 
                                    Nosso atendimento personalizado garante soluções sob medida,
                                    proporcionando uma experiência de serviço ao cliente excepcional 
                                    e atenciosa.
                                </p>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="icon">
                                <img src={Star} alt="icon" className='icon-car' />
                            </div>
                            <div className="info-text">
                                <h3>TECNOLOGIA DE ÚLTIMA GERAÇÃO </h3>
                                <p>
                                    Equipada com a mais avançada tecnologia, a Porão está na 
                                    vanguarda da inovação técnica. 
                                    Nossos laboratórios e ferramentas de última geração permitem diagnósticos 
                                    precisos e reparos eficientes,
                                    mantendo seus dispositivos em ótima condição.
                                </p>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="icon">
                                <img src={Like} alt="icon" className='icon-car' />
                            </div>
                            <div className="info-text">
                                <h3>BOA EXPERIÊNCIA </h3>
                                <p>
                                    A Porão é referência em qualidade e confiança,
                                    construída ao longo de uma sólida trajetória.  
                                    Nosso compromisso com a excelência se reflete em cada serviço, 
                                    garantindo sempre a satisfação e confiança dos nossos clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={sliderPrev} // Define a quantidade de slides visíveis por vez
                        autoplay={{
                            delay: 2000,  // Tempo entre cada transição
                            disableOnInteraction: false,  // Mantém o autoplay ativo mesmo após interação do usuário
                        }}
                        speed={800}  // Define a duração da animação de transição (em milissegundos)
                        loop={true}  // Ativa o loop para repetir os slides infinitamente
                        className="container col-4"
                    >
                        {imgsCars.map((Imgs) => (
                            <SwiperSlide key={Imgs.id} >
                                <div className="car">
                                    <img src={Imgs.img} alt="imgs" className='imgg' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
export default Dados

/**  <div className="car col-4">
                   
                        <img src={Img} alt="" className='imgg' />

                </div> */
