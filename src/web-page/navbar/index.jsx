import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ITEMS = [
    {name : 'home', url : '/'},
    {name : 'about', url : '/about'},
    {name : 'contact', url : '/contact'},
    {name : 'marketplace', url : '/marketplace'}
];

const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            let navbar = document.getElementById('portfolio-navbar');
            navbar.classList.toggle("sticky", window.scrollY > 0);

            let lastItem = document.getElementById('last-navbar-item');
            lastItem.classList.toggle("sticky-item", window.scrollY > 0);
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return(
        <header className="navbar" id="portfolio-navbar">
            <div className="navbar-logo">
                cm
            </div>

            <ul className="navbar-items">
                {ITEMS.map( (item, itemIdx) => {
                    let style = itemIdx === ITEMS.length - 1 ? 'last-navbar-item' : 'navbar-item';
                    if(itemIdx === ITEMS.length - 1){
                        return (
                        <Link key={itemIdx} to={item.url}>
                            <li id="last-navbar-item" className={style} key={itemIdx}>{item.name}</li>
                        </Link>
                        );
                    }
                    return(
                        <Link key={itemIdx} to={item.url}>
                        <li className={style} key={itemIdx}>
                            {item.name}
                        </li>
                        </Link>
                    );
                })}
            </ul>

            <div>
                <button className='px-4 py-2 mr-3 font-extrabold text-base text-white border-white rounded-lg border-2'>Login</button>
            </div>
        </header>
    );
}

export default Navbar;