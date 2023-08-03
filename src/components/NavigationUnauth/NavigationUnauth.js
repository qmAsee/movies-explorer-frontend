import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationUnauth() {
    return (
        <nav className='navbar navbar_unauth'>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <Link to='/signup' className='navbar__link navbar__link_reg'>Регистрация</Link>
                </li>
                <li className='navbar__item'>
                    <Link to='/signin' className='navbar__link navbar__link_log'>
                        <button type='button' className='navbar__log-button'>
                            Войти
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}