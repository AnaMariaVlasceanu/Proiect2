import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg'

// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer. Headerul va contine navbar-ul, deci link-urile utile catre alte pagini. Momentan, vom vrea ca
// header-ul sa contina link-uri catre Home si Login
function Header() {
    return(
        <div className='header d-flex justify-content-between align-items-center container'>
            <Link to='/'>
                <img src={logo} alt='logo' />
            </Link>
            <div>
            <Link to='/login'>Login</Link>
            <ShoppingCart />
            </div>
        </div>
    );
}

export default Header;