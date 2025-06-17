import CardsServices from '../CardsServices'
import './index.css'
import ScrollReveal from 'scrollreveal';
import Monitor from '../../assets/monitor.svg'
import Phone from '../../assets/smartphone.svg'
import Head from '../../assets/headphones.svg'
import Cpu from '../../assets/cpu.svg'
import Power from '../../assets/power.svg'
import { useEffect } from 'react';


function SectionCards(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.c1', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 300
        });
        reveall.reveal('.c2', {
            duration: 2000,
            distance: '10rem',
            origin: 'top',
            delay: 300
        });
        reveall.reveal('.c3', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 300
        });
        reveall.reveal('.c4', {
            duration: 2000,
            distance: '10rem',
            origin: 'right',
            delay: 300
        });
        reveall.reveal('.c5', {
            duration: 2000,
            distance: '10rem',
            origin: 'top',
            delay: 300
        });
        reveall.reveal('.c6', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 300
        });

        // Cleanup do ScrollReveal, se necessário
        return () => {
            // Cleanup do ScrollReveal, se necessário
        };
    }, []);
    return(
    <>
        
        <section className='container-fluid container-c'>
            <h3 className='title-t'>NOSSOS <span>SERVIÇOS</span></h3>
        <p className='title-p'>Enfrentando desafios tecnológicos ou precisando de coisa nova? A Porão Infocell tem!</p>
           <div className="container-g" id='services'>
           <CardsServices
                imagem={Monitor}
                textP="Venda de Pc's"
                textS= "Oferecemos reparos e manutenção de alta qualidade para dispositivos de informática e smartphones."
                className= "c1"   
            />
             <CardsServices
                imagem={Head}
                textP = "Acessorios e Perifericos "
                textS= "Vendemos acessórios de alta qualidade para dispositivos eletrônicos, garantindo praticidade e estilo para o seu dispositivo e outros acessorios tecnologicos ." 
                className= "c2"  
            />
             <CardsServices
                imagem={Phone}
                textP = "Venda de Celulares Novos"
                textS= "Conheça os Smartphones novos na Porão, unindo design inovador, recursos avançados e a experiência completa."  
                className= "c3" 
            />
             <CardsServices
                imagem={Power}
                textP = "Atendimento Online"
                textS= "Oferecemos atendimento online rápido e eficiente, garantindo suporte ágil e personalizado para resolver suas dúvidas no ambiente online ."   
                className= "c4"
            />
             <CardsServices
                imagem={Monitor}
                textP = "Assistência Técnica Especializada"
                textS= "Oferecemos assistência técnica especializada, garantindo reparos rápidos"   
                className= "c5"
            />
             <CardsServices
                imagem={Cpu}
                textP = "Troca de peças"
                textS= "Realizamos troca de peças de PC com profissionais qualificados, garantindo o melhor desempenho e a máxima qualidade para você"  
                className= "c6" 
            />
           </div>
        </section>
    </>
    )
}
export default SectionCards