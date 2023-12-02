import React from 'react';
import { Link } from 'react-router-dom';
import './topo.css'
<topo />


export default function Topo() {
    return (
        <header className='container-topo'>
            <div className='limita-secao-topo'>
            <img src="assets/logo.png" alt="" />
                <nav>
                    <Link className='topo-link' to='/'>Home</Link>
                    <Link className='topo-link' to='/Sabores'>Sabores</Link>
                    <Link className='topo-link' to='/Sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}