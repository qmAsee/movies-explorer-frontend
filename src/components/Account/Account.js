import React from 'react';

import { Link } from 'react-router-dom';

export default function Account() {
    return (
        <section className='account'>
            <h1 className='account__title'>Привет, Username</h1>
            <form className='account__form'>
                <ul className='account__info'>
                    <li className='account__box'>
                        <span className='account__name'>Имя</span>
                        <input type='text' name='name' className='account__username' placeholder='Имя' disabled required />
                    </li>
                    <li className='account__box'>
                        <span className='account__email'>E-mail</span>
                        <input type='email' name='email' className='account__useremail' placeholder='Почта' disabled required></input>
                    </li>
                </ul>
                <button type='button' className='account__edit'>Редактировать</button>
            </form>
            <Link to='/' className='account__exit'>Выйти из аккаунта</Link>
        </section>
    )
}