import React from 'react';

export default function Footer() {
    return (
        <footer className='footer'>
            <span className='footer__title'>Учебный проект Яндекс.Практикум x BeatFilm.</span>
            <div className='footer__copyright'>
                <span className='footer__year'>&#169; 2023 Максим Купчин</span>
                <ul className='footer__links'>
                    <li className='footer__sources'>
                        <a href='https://practicum.yandex.ru/' target='_blank' className='footer__link'>Яндекс.Практикум</a>
                    </li>
                    
                    <li className='footer__sources'>
                        <a href='https://github.com/qmAsee' target='_blank' className='footer__link'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}