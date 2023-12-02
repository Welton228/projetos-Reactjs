import React from "react";
import Rodape from '../../componentes/rodape'
import Topo from '../../componentes/topo'
import './sabores.css';
import { Link } from 'react-router-dom';


export default function Sabores() {
    return (
        <section className="secao-exterior">
            <Topo />
            <div className="secao-titulo">
                <h1>Nossos Sabores</h1>
            </div>
            <h1>Sabores de sorvete</h1>
            <section className="secao-sabores-principal">
                <div className="secao-sabores-fotos">
                    <div className="secao-sabores-sorvetes">
                        <img src="./assets/sabor-oreo.png" alt="" />
                        <span>Sorvete de oreo</span>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className="secao-sabores-sorvetes">
                        <img src="./assets/sabor-pistache.png" alt="" />
                        <span>Sorvete pistache</span>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className="secao-sabores-sorvetes">
                        <img src="./assets/sabor-cookies-avela.png" alt="" />
                        <span>Sorvete cookies & avelã</span>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className="secao-sabores-sorvetes">
                        <img src="./assets/sorbet-kiwi.png" alt="" />
                        <span>Sorvete de kiwi</span>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className="secao-sabores-sorvetes">
                        <img src="./assets/sorbet-morango.png" alt="" />
                        <span>Sorvete de morango</span>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="secao-sabores-sorvetes">
                        <img src="./assets/sorbet-limao.png" alt="" />
                        <span>Sorvete de limão siciliano</span>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
            <Rodape />
        </section>

    );
}