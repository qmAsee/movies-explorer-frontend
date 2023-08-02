import React from 'react';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props) {
    return (
        <div className={props.isOpened ? `sidebar sidebar_opened` : `sidebar`}>
            <nav className='sidebar__content'>
                <button type='button' onClick={props.onClose} className='sidebar__close-icon' />
                <ul className='sidebar__links'>
                    <Link to='/' className='sidebar__link'>Главная</Link>
                    <NavLink to='/movies' onClick={props.onClose} className={({isActive}) => isActive ? 'sidebar__films sidebar__films_active' : 'sidebar__films'}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' onClick={props.onClose} className={({isActive}) => isActive ? 'sidebar__films sidebar__films_active' : 'sidebar__films'}>Сохраненные фильмы</NavLink>
                </ul>
                <Link onClick={props.onClose} to='/profile' className='sidebar__me'>
                <span className='sidebar__account'>Аккаунт</span>
                <div className='sidebar__acclink'>
                    <div className='sidebar__guard'></div>
                </div>
            </Link>
            </nav>
        </div>
    )
}