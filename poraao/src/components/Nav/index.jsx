import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

function Nav() {
    return (
        <>
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
        </>
    )
}
export default Nav