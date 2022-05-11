import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img
                    src={process.env.PUBLIC_URL + '/omg-logo.png'}
                    alt="OMG Comics"
                />
            </Link>
            <ul className='nav'>
                <li><NavLink to='/item/1' className={nav => nav.isActive ? 'nav-active' : ''}>Batman</NavLink></li>
                <li><NavLink to='/item/2' className={nav => nav.isActive ? 'nav-active' : ''}>Superman</NavLink></li>
                <li><NavLink to='/item/3' className={nav => nav.isActive ? 'nav-active' : ''}>Flash</NavLink></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;