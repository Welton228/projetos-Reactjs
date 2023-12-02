import React from "react";
import Topo from "../../componentes/topo";
import Rodape from "../../componentes/rodape";
import './home.css';


export default function Home() {
    return (
        <div className="container-externo">
            <main className="container-principal">
                <Topo />
                <section className="secao-banner">
                    <div className="secao-titulo-banner">
                        <h1>Sorvete Artesanal</h1>
                    </div>
                    <img src="assets/banner-home.png" alt="" />
                </section>
                <section>

                    <div className="secao-sabores">
                        <img src="assets/banner-sabores.jpg" alt="" />
                        <article className="secao-texto">
                            <h2>Nossos Sabores</h2>
                            <span>Novos e deliciosos!</span>
                            <p>
                                Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria
                                todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante!
                                Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem
                                como o sorvete ser delicioso e saudável ao mesmo tempo!
                            </p>
                        </article>
                    </div>
                    <div className="secao-sabores">
                        <article className="secao-texto">
                            <h2>Nossos eventos</h2>
                            <span>Delicias com sorvete!</span>
                            <p>
                                Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                            </p>
                        </article>
                        <img src="assets/eventos-image.jpg" alt="" />
                    </div>
                </section>
                <section>
                    <div className="secao-sabores">
                        <img src="assets/sobre-image.jpg" alt="" />
                        <article className="secao-texto">
                            <h2>Sobre nós!</h2>
                            <span>Alegria em cada casquinha!</span>
                            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                            </p>
                        </article>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>

    );
}