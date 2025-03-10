import React, { useState } from 'react';
import './index.css';

function NavH() {
    const [isChecked, setIsChecked] = useState(false);

    // Função para desmarcar o checkbox e fechar o menu
    const handleLinkClick = () => {
        setIsChecked(false); // Desmarca o checkbox, fechando o menu
    };

    return (
        <div className="navigation-main">
            <input 
                className="input" 
                type="checkbox" 
                id="menuToggle" 
                checked={isChecked} 
                onChange={() => setIsChecked(!isChecked)} // Alterna o estado do checkbox
            />
            <label className="label" htmlFor="menuToggle">
                <span className="span">&nbsp;</span>
            </label>
            <nav className="menu-nav">
                <ul className="list">
                    <li className="item">
                        <a className="link" href="#aboutUs" onClick={handleLinkClick}>Sobre Nós</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#diferents" onClick={handleLinkClick}>Diferenciais</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#services" onClick={handleLinkClick}>Serviços</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#brands" onClick={handleLinkClick}>Marcas Trabalhadas</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavH;

