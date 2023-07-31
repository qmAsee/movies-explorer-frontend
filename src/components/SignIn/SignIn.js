import React from 'react';

import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <section className='signin'>
            <div className='signin__header'>
                <Link to='/' className="header__logo sign__logo"></Link> 
                <h1 className='signin__title'>Рады видеть!</h1>
            </div>
            <form className='signin__form'>

                <label className='signin__label'>E-mail</label>
                <input type='email' className='signin__input signin__input_email' required />

                <label className='signin__label'>Пароль</label>
                <input type='password' className='signin__input signin__input_password' required></input>

                <button type='submit' className='signin__button'>Войти</button>

            </form>

            <p className='signin__already'>Ещё не зарегистрированы? <Link to='/signup' className='signin__signup'>Регистрация</Link></p>
        </section>
    )
}