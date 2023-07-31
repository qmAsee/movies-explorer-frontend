import React from 'react';

export default function Footer() {
    return (
        <footer className='footer'>
            <span className='footer__title'>Учебный проект Яндекс.Практикум x BeatFilm.</span>
            <div className='footer__copyright'>
                <span className='footer__year'>&#169; 2023 Максим Купчин</span>
                <div className='footer__links'>
                    <a href='https://practicum.yandex.ru/' target='_blank' className='footer__link'>Яндекс.Практикум</a>
                    <a href='https://github.com/qmAsee' target='_blank' className='footer__link'>Github</a>
                </div>
            </div>
        </footer>
    )
}