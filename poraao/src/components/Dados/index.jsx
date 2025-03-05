import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal'
import './index.css'
import { useEffect } from 'react';

function Dados(){
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
    return(
        <>
        <section className="backup container-fluid ">
           <div className="text-back col-6">
            <span className='span-tt'>Segurança <span className='one'>com os seus dados</span></span>
            <p className='text-pp'> 
                Nosso serviço de backup de dados garante que suas informações <br />
                importantes sejam salvas antes da formatação do seu dispositivo. <br />
                Realizamos a transferência segura dos seus arquivos, evitando qualquer perda durante o processo de formatação <br />
                e garantindo que tudo esteja pronto para ser restaurado rapidamente quando necessário. 
            </p>
           </div>
        </section>
        </>
    )
}
export default Dados
