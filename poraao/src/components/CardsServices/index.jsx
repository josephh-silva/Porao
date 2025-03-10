import './index.css'

import Monitor from '../../assets/monitor.svg'
import Arrow from '../../assets/arrow.svg'
function CardsServices(props){
    return(
        <>
           <div className="container-cards">
           <div>
                <img src={props.imagem} alt="img" className='img-card' />
            </div>
            <div className='texts'>
                <p>{props.textP}</p>
                <span>
                    {props.textS}
                </span>
            </div>
            <a href="#" className='link'>
                Saiba mais
                <img src={Arrow} alt="arrow" />
            </a>
           </div>
        
        </>
    )
}
export default CardsServices