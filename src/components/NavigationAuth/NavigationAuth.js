import React from 'react';

import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

export default function NavigationAuth() {
    const [isPopupOpened, setIsPopupOpened] = React.useState(false)

    function onOpen() {
        setIsPopupOpened(true);
    }

    function onClose() {
        setIsPopupOpened(false);
    }

    return (
        <>
            <Sidebar isOpened={isPopupOpened} onClose={onClose} />
            <nav className='navbar__menu'>
                <NavLink to='/movies' className={({ isActive }) => isActive ? 'navbar__films navbar__films_active' : 'navbar__films'}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className={({ isActive }) => isActive ? 'navbar__films navbar__films_active' : 'navbar__films'}>Сохранённые фильмы</NavLink>
            </nav>
            <NavLink to='/account' className='navbar__me'>
                <span className='navbar__account'>Аккаунт</span>
                <div className='navbar__acclink'>
                    <div className='navbar__guard'></div>
                </div>
            </NavLink>
            <button onClick={onOpen} type='button' className='navbar__burger'></button>
        </>
    )
}