import React from 'react';

export default function Account() {
    return (
        <section className='account'>
            <h1 className='account__title'>Привет, Username</h1>
            <ul className='account__info'>
                <li className='account__box'>
                    <span className='account__name'>Имя</span>
                    <span className='account__username'>Username</span>
                </li>
                <div className='account__line'></div>
                <li className='account__box'>
                    <span className='account__email'>E-mail</span>
                    <span className='account__useremail'>UserEmail@ya.ru</span>
                </li>
            </ul>
            <span className='account__edit'>Редактировать</span>
            <span className='account__exit'>Выйти из аккаунта</span>
        </section>
    )
}