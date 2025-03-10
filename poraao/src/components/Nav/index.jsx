import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react';
import { useEffect } from 'react';

const textSlider = [
    {text : "Venda de Aparelhos, Assistência Técnica, Recuperação de Dados, Acessórios, Computadores, Notebooks e Games."},
    {text: "Conheça os iPhones novos na KB Tech, unindo design inovador, recursos avançados e a experiência Apple completa."},
    {text: "Encontre acessórios originais na Porão, desde capas a fones de ouvido, para melhorar sua experiência."}
]


function Nav() {
    const [sliderPrev, setSliderPrev] = useState(1)
    const [textCar, setTextCar] = useState(textSlider(0).text)
    
    const textChange = (Swiper) =>{
        const swiperIndex = Swiper.activeIndex
        setTextCar(textSlider[swiperIndex.text])
    }
    useEffect(()=>{
        const sizeWindow = ()=>{
            if(window.innerWidth > 320){
                setSliderPrev(1)
            }
        }
        sizeWindow()
        addEventListener('resize', sizeWindow)
        return()=>{
            removeEventListener('resize', sizeWindow)
        }
    },[])
    
    return (
        <>
        <Swiper
            slidesPerView={sliderPrev}
            pagination= {{clickable: true}}
            onSlideChange={textChange}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            speed={800}
            loop={true}
            className='container-fluid nav-g'
        
        >
            {textSlider.map((texts)=>( 
                <SwiperSlide className='texts-sliders'>
                    <h1>{textCar}</h1>
                </SwiperSlide>
            ))}
        </Swiper>
           
        </>
    )
}
export default Nav

/*
 <nav className='container-fluid nav-g row'>
                <div className='col-2 colum-one'>
                    <h1>Porão</h1>
                </div>
                <div className="col-6 colum-two" >
                    <a href="#">Porão</a>
                    <a href="#">Serviços</a>
                    <a href="#">Sobre Nós</a>
                </div>
                <div className='col-4 colum-three'>
                    <a href="#">Entre em Contato</a>
                </div>
            </nav>
 */