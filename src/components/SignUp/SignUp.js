import React from 'react';

import { Link, useNavigate } from 'react-router-dom';


export default function SignUp({ isLoading, onSignUp, message, isLoggedIn }) {
    const navigate = useNavigate()

    const [name, setName] = React.useState('')
    const [nameDirty, setNameDirty] = React.useState(false)
    const [nameError, setNameError] = React.useState('Имя не может быть пустым')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailDirty, setEmailDirty] = React.useState(false)
    const [passwordDirty, setPasswordDirty] = React.useState(false)
    const [emailError, setEmailError] = React.useState('Поле E-mail не может быть пустым')
    const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = React.useState(false)

    const [formValue, setFormValue] = React.useState({});
    
    const nameHandler = (e) => {
        setName(e.target.value)

        if (e.target.value.length < 2) {
            setNameError('Имя не может быть короче 2 символов')
        } else if (e.target.value.length > 30) {
            setNameError('Имя не может быть длиннее 30 символов')
        }   else if (!e.target.value) {
            setNameError('Поле не может быть пустым')
        } else {
            setNameError('')
        }

        const { name, value } = e.target;

        setFormValue({
        ...formValue,
        [name]: value,
        });
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);

        const emailRexExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!emailRexExp.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный E-mail')
        } else {
            setEmailError('')
        }

        const { name, value } = e.target;

        setFormValue({
        ...formValue,
        [name]: value,
        });

    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if (e.target.value.length < 6 || e.target.value.length > 30) {
            setPasswordError('Пароль не должен быть короче 6 символов и длиннее 30 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }

        const { name, value } = e.target;

        setFormValue({
        ...formValue,
        [name]: value,
        });
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { name, email, password } = formValue;

        onSignUp(name, email, password)
    }

    React.useEffect(() => {
        if (isLoggedIn) {
          navigate('/movies', {replace: true})
        }
      })

    React.useEffect(() => {
        if (emailError || passwordError || nameError) {
          setFormValid(false)
        } else {
          setFormValid(true)
        }
    }, [emailError, passwordError, nameError])

      

    return (
        <section className='signup'>
            <div className='signup__header'>
                <Link to='/' className="signup__logo"></Link> 
                <h1 className='signup__title'>Добро пожаловать!</h1>
            </div>
            <form onSubmit={handleSubmit} className='signup__form'>

                <div className='signup__box'>
                    <label className='signup__label'>Имя</label>
                    <input onChange={e => nameHandler(e)} type='text' name='name' value={name} onBlur={e => blurHandler(e)} className='signup__input signup__input_name' placeholder='Ваше имя' required />
                    {(nameDirty && nameError) && <span className='signup__input-error' style={{visibility: 'visible'}}>{nameError}</span>}
                </div>

                <div className='signup__box'>
                    <label className='signup__label'>E-mail</label>
                    <input onChange={e => emailHandler(e)} type='email' name='email' value={email} onBlur={e => blurHandler(e)} className='signup__input signup__input_email' placeholder='E-mail' required />
                    {(emailDirty && emailError) && <span className='signup__input-error' style={{visibility: 'visible'}}>{emailError}</span>}
                </div>

                <div className='signup__box'>
                    <label className='signup__label'>Пароль</label>
                    <input onChange={e => passwordHandler(e)} type='password' name='password' value={password} onBlur={e => blurHandler(e)} className='signup__input signup__input_password' placeholder='Пароль' required></input>
                    {(passwordDirty && emailDirty) && <span className='signup__input-error' style={{visibility: 'visible'}}>{passwordError}</span>}
                </div>
                
                <span className='signup__error'>{message}</span>
                <button disabled={!formValid} type='submit' className='signup__button'>Зарегистрироваться</button>

            </form>

            <p className='signup__already'>Уже зарегистрированы? <Link to='/signin' className='signup__signin'>Войти</Link></p>
        </section>
    )
} 