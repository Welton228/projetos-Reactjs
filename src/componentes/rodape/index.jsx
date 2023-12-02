import React from "react";
import './footer.css';
import {Link} from 'react-router-dom';


export default function Rodape() {
    return (
        <div className="container-externo-rodape"> 
         <img src="assets/logo.png" alt="" />
        <footer >
            <div className="container-elementos-rodape">
                <div>
                <h2>Endereço</h2>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                <h2>Contato</h2>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                <h2>Horários</h2>
                <p>Aberto todos os dias</p>
                <p>10:00 - 22:00</p>
                </div>
            </div>
            <p>Gelateria. Orgulhosamente desenvolvido por "Welton Coelho Fernandes"</p>
        </footer>
        </div>
    );
}