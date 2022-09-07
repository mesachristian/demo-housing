import React, { Fragment } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

// ASSETS
import house1 from 'assets/img/house-1.png';
import house2 from 'assets/img/house-2.png';
import house3 from 'assets/img/house-3.png';

// STYLES
import './styles.css';

const ITEMS = [
    { name: 'inicio', url: '/' },
    { name: 'para dueños de propiedad', url: '/owners' },
    { name: 'para inversionistas', url: '/investors' },
    { name: 'marketplace', url: '/marketplace' }
];

const App = () => {
    return (
        <div className='relative w-screen h-screen overflow-x-hidden'>
            <BrowserRouter>
                <header className='fixed top-0 left-0 h-[13%] w-full bg-white text-primary-blue flex items-center justify-between px-32 
                py-7 border-[1px] border-custom-gray shadow-lg z-10'>
                    
                    <div className='h-full w-20 bg-logo bg-center bg-cover bg-no-repeat bg-local'></div>

                    <ul className='relative flex items-center justify-center'>
                        {ITEMS.map((item, itemIdx) => {
                            return (
                                <Link key={itemIdx} to={item.url}>
                                    <li id="last-navbar-item"
                                        className='relative list-none mx-4 capitalize font-light no-underline text-primary-blue'
                                        key={itemIdx}>
                                        {item.name}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </header>

                <Fragment>
                    <div className='h-full w-full bg-light-blue pt-28 pb-7 px-20 flex items-center justify-center'>
                        <div className='h-full w-7/12 py-20 flex flex-col justify-between items-start'>
                            <h1 className='text-primary-blue font-extrabold text-5xl'>Marketplace mundial de acciones inmobiliarias</h1>
                            <p className='text-primary-blue text-lg'>
                                Permite a los propietarios acceder al valor de sus bienes inmobiliarios sin 
                                necesidad de prestamos e inversionistas inmobiliarios. Tienen la oportunidad
                                de construir una cartera de bienes raíces residenciales fraccionados tokenizados.
                            </p>

                            <button className='py-3 px-5 bg-primary-blue text-white rounded-md text-base'>Ir al Marketplace</button>
                        </div>

                        <div className='h-full w-5/12 flex items-center justify-center'>
                            <div class="container">
                                <input type="radio" name="slider" id="item-1" checked />
                                <input type="radio" name="slider" id="item-2" />
                                <input type="radio" name="slider" id="item-3" />

                                <div class="cards">
                                    <label class="card" for="item-1" id="selector-1">
                                        <img alt='house-1' src={house1} />
                                    </label>
                                    <label class="card" for="item-2" id="selector-2">
                                        <img alt='house-2' src={house2} />
                                    </label>
                                    <label class="card" for="item-3" id="selector-3">
                                        <img alt='house-3' src={house3} />
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-full w-full bg-white'>
                        <div className='w-full px-20 py-10'>
                            <h1 className='w-full text-secondary-blue text-3xl font-extrabold text-center'>
                                La herramienta que conecta a los dueños de las propiedades con inversionistas
                                directamente usando las ventajas de Blockchain.
                            </h1>
                        </div>
                    </div>

                    <div className='h-full w-full flex'>
                        <div className='h-full w-[57%] bg-gray-700'>

                        </div>

                        <div className='h-full w-[63%] bg-light-blue p-14 flex flex-col justify-center items-center'>
                            <h2 className='text-gray-900 text-2xl font-extrabold'>
                                Empieza a invertir en el mercado inmobiliario de
                                <span className='text-secondary-blue'> manera rapida y sencilla </span> teniendo
                                una alta gama de lineas de negocio de <span className='text-secondary-blue'> muy poco capital </span>
                                y empieza a obtener beneficios de manera <span className='text-secondary-blue'>inmediata</span>.
                            </h2>

                            <p>
                                La solución propone un marketplace que usa todos los beneficios 
                                desentralizados del blockchain
                            </p>
                        </div>
                    </div>
                    
                    <div className='h-full w-full flex'>
                        <div className='h-full w-[63%] bg-light-blue'>

                        </div>
                        <div className='h-full w-[57%] bg-gray-700'>

                        </div>
                    </div>
                    
                </Fragment>

                <footer className='w-full flex flex-col justify-center items-center my-8 overflow-hidden bg-white'>
                    <h4 className='text-xs text-primary-blue'>Copyright © 2022, House Way Solutions Inc. - All rights reserved</h4>
                    <div className='mt-4 text-primary-blue'>
                        <i className="fab fa-facebook mr-4 scale-150"></i>
                        <i className="fab fa-instagram mr-4 scale-150"></i>
                        <i className="fab fa-linkedin mr-4 scale-150"></i>
                        <i className="fab fa-twitter scale-150"></i>
                    </div>
                </footer>
            </BrowserRouter>
        </div>
    )
}

export default App;