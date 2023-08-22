import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn({ onSignIn, message, isLoggedIn }) {

    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailDirty, setEmailDirty] = React.useState(false)
    const [passwordDirty, setPasswordDirty] = React.useState(false)
    const [emailError, setEmailError] = React.useState('Поле E-mail не может быть пустым')
    const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = React.useState(false)

    const [formValues, setFormValues] = React.useState({});


    const [formValue, setFormValue] = React.useState({});

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { email, password } = formValue;

        onSignIn(email, password)
    }

    function handleSetEmail(evt) {
      setEmail(evt.target.value);

      const emailRexExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!emailRexExp.test(String(evt.target.value).toLowerCase())) {
          setEmailError('Некорректный E-mail')
      } else {
          setEmailError('')
      }

        const { name, value } = evt.target;
    
        setFormValue({
          ...formValue,
          [name]: value,
        });
      }
    
      function handleSetPassword(evt) {
        setPassword(evt.target.value)

      if (evt.target.value.length < 6 || evt.target.value.length > 30) {
          setPasswordError('Пароль не должен быть короче 6 символов и длиннее 30 символов')
          if (!evt.target.value) {
              setPasswordError('Пароль не может быть пустым')
          }
      } else {
          setPasswordError('')
      }

        const { name, value } = evt.target;
    
        setFormValue({
          ...formValue,
          [name]: value,
        });
      }

      React.useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

      React.useEffect(() => {
        if (isLoggedIn) {
          navigate('/movies', {replace: true})
        }
      }) 

    return (
        <section className='signin'>
            <div className='signin__header'>
                <Link to='/' className="signin__logo"></Link> 
                <h1 className='signin__title'>Рады видеть!</h1>
            </div>
            <form onSubmit={handleSubmit} className='signin__form'>

                <label className='signin__label'>E-mail</label>
                <input
                onChange={handleSetEmail}
                name='email'
                type='email'
                className='signin__input signin__input_email'
                placeholder='E-mail'
                value={email}
                required
                onBlur={e => blurHandler(e)}
                />
                {(emailDirty && emailError) && <span className='signin__input-error' style={{visibility: 'visible'}}>{emailError}</span>}

                <label className='signin__label'>Пароль</label>
                <input
                onChange={e => handleSetPassword(e)}
                name='password'
                type='password'
                className='signin__input signin__input_password'
                placeholder='Пароль'
                value={password}
                required
                onBlur={e => blurHandler(e)}
                />
                {(passwordDirty && emailDirty) && <span className='signin__input-error' style={{visibility: 'visible'}}>{passwordError}</span>}

                <span className='signin__error'>{message}</span>
                <button disabled={!formValid} type='submit' className='signin__button'>Войти</button>

            </form>

            <p className='signin__already'>Ещё не зарегистрированы? <Link to='/signup' className='signin__signup'>Регистрация</Link></p>
        </section>
    )
}