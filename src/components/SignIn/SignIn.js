import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn({ onSignIn, message }) {


    const [formValue, setFormValue] = React.useState({});

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { email, password } = formValue;

        onSignIn(email, password)
    }

    function handleSetEmail(evt) {
        const { name, value } = evt.target;
    
        setFormValue({
          ...formValue,
          [name]: value,
        });
      }
    
      function handleSetPassword(evt) {
        const { name, value } = evt.target;
    
        setFormValue({
          ...formValue,
          [name]: value,
        });
      }

    return (
        <section className='signin'>
            <div className='signin__header'>
                <Link to='/' className="signin__logo"></Link> 
                <h1 className='signin__title'>Рады видеть!</h1>
            </div>
            <form onSubmit={handleSubmit} className='signin__form'>

                <label className='signin__label'>E-mail</label>
                <input onChange={handleSetEmail} name='email'  type='email' className='signin__input signin__input_email' placeholder='E-mail' required />

                <label className='signin__label'>Пароль</label>
                <input onChange={handleSetPassword} name='password'  type='password' className='signin__input signin__input_password' placeholder='Пароль' required></input>

                <span className='signin__error'>{message}</span>
                <button type='submit' className='signin__button'>Войти</button>

            </form>

            <p className='signin__already'>Ещё не зарегистрированы? <Link to='/signup' className='signin__signup'>Регистрация</Link></p>
        </section>
    )
}