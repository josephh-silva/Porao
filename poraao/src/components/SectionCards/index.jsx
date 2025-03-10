import CardsServices from '../CardsServices'
import './index.css'
import Monitor from '../../assets/monitor.svg'
import Cloud from '../../assets/cloud.svg'
import Head from '../../assets/headphones.svg'
import Cpu from '../../assets/cpu.svg'
import Power from '../../assets/power.svg'


function SectionCards(){
    return(
    <>
        <section className='container-fluid container-g'>
            <CardsServices
                imagem={Monitor}
                textP="Venda de Pc's"
                textS= "Oferecemos reparos e manutenção de alta qualidade para dispositivos de informática e smartphones."   
            />
             <CardsServices
                imagem={Head}
                textP = "Acessorios e Perifericos "
                textS= "Vendemos acessórios de alta qualidade para dispositivos eletrônicos, garantindo praticidade e estilo para o seu dispositivo e outros acessorios tecnologicos ."   
            />
             <CardsServices
                imagem={Cloud}
                textP = "Backup"
                textS= "Oferecemos serviços de backup de dados seguros, garantindo a proteção e a recuperação de suas informações."   
            />
             <CardsServices
                imagem={Power}
                textP = "Atendimento Online"
                textS= "Oferecemos atendimento online rápido e eficiente, garantindo suporte ágil e personalizado para resolver suas dúvidas no ambiente online ."   
            />
             <CardsServices
                imagem={Monitor}
                textP = "Assistência Técnica Especializada"
                textS= "Oferecemos assistência técnica especializada, garantindo reparos rápidos"   
            />
             <CardsServices
                imagem={Cpu}
                textP = "Troca de peças"
                textS= "Realizamos troca de peças de PC com profissionais qualificados, garantindo o melhor desempenho e a máxima qualidade para você"   
            />
        </section>
    </>
    )
}
export default SectionCards