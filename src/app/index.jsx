import React, { Fragment, useState } from 'react';
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
    const [stepIdx, setStepIdx] = useState(0);

    const changeStepIdx = (newStep) => {
        if(newStep < 0){
            newStep = 3;
        }
        if(newStep >= 4){
            newStep = 0;
        }
        setStepIdx(newStep);
    }

    const initialSteps = [
        'Elige tu propiedad favorita.',
        'Dirígete a OpenSea y conecta tu wallet Metamask.',
        'Adquiere tu token de la propiedad.',
        'Empieza a recibir ingresos pasivos.'
    ];

    return (
        <div className='relative w-screen h-screen overflow-x-hidden'>
            <BrowserRouter>
                <header className='fixed top-0 left-0 h-[13%] w-full bg-white text-primary-blue flex items-center justify-between px-32 
                py-7 border-[1px] border-custom-gray shadow-lg z-10'>
                    
                    <div className='h-full lg:w-20 xl:w-20 2xl:w-40 bg-logo bg-center bg-cover bg-no-repeat bg-local'></div>

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
                        <div className='h-full w-7/12 py-20 2xl:py-36 flex flex-col justify-between items-start'>
                            <h1 className='text-primary-blue font-extrabold text-5xl 2xl:text-7xl'>Marketplace mundial de acciones inmobiliarias</h1>
                            <p className='text-primary-blue text-lg 2xl:text-2xl'>
                                Permite a los propietarios acceder al valor de sus bienes inmobiliarios sin 
                                necesidad de prestamos e inversionistas inmobiliarios. Tienen la oportunidad
                                de construir una cartera de bienes raíces residenciales fraccionados tokenizados.
                            </p>

                            <button className='py-3 px-5 bg-primary-blue text-white rounded-md text-base 2xl:text-2xl'>Ir al Marketplace</button>
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

                        <div className=''>

                        </div>
                    </div>

                    <div className='h-full w-full flex'>
                        <div className='h-full w-[57%] bg-gray-700 p-20'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <iframe 
                                    className="w-full aspect-video" 
                                    title='iac-invest-video'
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen 
                                    src="https://www.youtube.com/embed/0P8b6pteVqk"></iframe>
                            </div>
                        </div>

                        <div className='h-full w-[63%] bg-light-blue p-14 flex flex-col justify-center items-center'>
                            <h2 className='text-gray-900 text-2xl font-extrabold'>
                                Empieza a invertir en el mercado inmobiliario de
                                <span className='text-secondary-blue'> manera rapida y sencilla </span> teniendo
                                una alta gama de lineas de negocio de <span className='text-secondary-blue'> muy poco capital </span>
                                y empieza a obtener beneficios de manera <span className='text-secondary-blue'>inmediata.</span>
                            </h2>

                            <p className='text-base 2xl:text-xl text-gray-900 mt-10'>
                                La solución propone un marketplace que usa todos los beneficios 
                                desentralizados del blockchain para que las personas sin necesidad de prestamos bancarios
                                o un gran capital disponible pueda invertir en el mercado de bienes raices de manera
                                rapida y segura
                            </p>
                        </div>
                    </div>
                    
                    <div className='h-full w-full flex'>
                        <div className='h-full w-[63%] bg-light-blue p-20 flex flex-col justify-center items-start'>
                            <h2 className='text-gray-900 text-2xl font-extrabold'>
                                Con solo 4 pasos puedes empezar a generar ganancias pasivas!    
                            </h2>

                            <div className='mt-10'>
                                {initialSteps.map( (step, idx) => {
                                    let borderColor = idx === stepIdx ? 'border-primary-blue' : 'border-gray-900';
                                    let textStyle = idx === stepIdx ? 'text-secondary-blue scale-105' : 'text-gray-900';
                                    return(
                                        <div className={'flex mt-6 hover:cursor-pointer ' + textStyle} onClick={() => setStepIdx(idx)}>
                                            <div className={'border-[1px] text-lg rounded-[50%] w-8 h-8 flex justify-center items-center ' + borderColor}>{idx + 1}</div>
                                            <p className='text-lg ml-3'>{step}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='h-full w-[57%] bg-gray-700 p-28 pt-36'>
                            <Slider selectedIdx={stepIdx} changeSelectedIdx={changeStepIdx} />
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


const Slider = ({selectedIdx, changeSelectedIdx}) => {

    const stepImages = [
        'bg-house-card',
        'bg-house-portrait',
        'bg-house-card',
        'bg-house-search-bg'
    ];

    return(
        <div className='h-full w-full flex flex-col justify-start items-center'>
            <div className={'h-5/6 w-full bg-center bg-cover bg-no-repeat bg-local ' + stepImages[selectedIdx]}>

            </div>
            <div className='h-1/6 w-full flex items-center justify-center text-custom-white'>
                <i className="fa fa-arrow-left mr-4 hover:cursor-pointer" onClick={() => changeSelectedIdx(selectedIdx - 1)}></i>
                <p className='mr-4'>{selectedIdx + 1}/4</p>
                <i className="fa fa-arrow-right hover:cursor-pointer" onClick={() => changeSelectedIdx(selectedIdx + 1)}></i>
            </div>
        </div>
    );
}

export default App;