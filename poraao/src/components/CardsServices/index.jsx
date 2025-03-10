import './index.css'

import Monitor from '../../assets/monitor.svg'
import Arrow from '../../assets/arrow.svg'
function CardsServices(props){
    return(
        <>
        <div className={`container-cards ${props.className ? props.className : ""}`}>
           <div>
                <img src={props.imagem} alt="img" className='img-card' />
            </div>
            <div className='texts'>
                <p>{props.textP}</p>
                <span>
                    {props.textS}
                </span>
            </div>
            <a
             href="#" 
             className='link'
             onClick={() => window.open('https://wa.me/5591983029616', '_blank')}
            >
                Saiba mais
                <img src={Arrow} alt="arrow" />
            </a>
           </div>
        
        </>
    )
}
export default CardsServices