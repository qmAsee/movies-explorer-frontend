import React from 'react';

import { Link } from 'react-scroll';

export default function LandingNav() {
    return (
        <nav className='landingnav'>
            <ul className='landingnav__list'>
                <li className='landingnav__element'>
                    <Link to={'about'} smooth={true} duration={350} className='landingnav__link'>О проекте</Link>
                </li>
                <li className='landingnav__element'>
                    <Link to={'techs'} smooth={true} duration={350} className='landingnav__link'>Технологии</Link>
                </li>
                <li className='landingnav__element'>
                    <Link to={'student'} smooth={true} duration={350} className='landingnav__link'>Студент</Link>
                </li>
            </ul>
        </nav>
    )
}