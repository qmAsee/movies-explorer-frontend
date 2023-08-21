import React, { useRef } from 'react';
import useForm from '../../hooks/useForm';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';

import { EMAIL_PATTERN } from '../../utils/utils';

export default function Account({ onUpdateData, isLoggedIn, onSignOut, updateError }) {
    const currentUser = React.useContext(CurrentUserContext)
    const [recentValues, setRecentValues] = React.useState(false);
    const [isFormEditable, setIsFormEditable] = React.useState(false);
    const nameRef = useRef(null);

    const {
        handleChange,
        resetForm,
        errors,
        isFormValid,
        values    
    } = useForm()


    
    function handleEditData() {
        setIsFormEditable(true)
    }

    function handleSubmitForm(evt) {
        evt.preventDefault();

        onUpdateData({
            name: values.name,
            email: values.email
        })

        setIsFormEditable(false)
    }

    React.useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setRecentValues(true)
        } else {
            setRecentValues(false)
        }
    }, [values])

    React.useEffect(() => {
        if (currentUser) {
            resetForm(currentUser)
        }
    }, [currentUser, resetForm])

    

    React.useEffect(() => {
        if (!isFormEditable) {
            return
        }
        nameRef.current.focus();
    }, [isFormEditable])

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <section className='account'>
                <h1 className='account__title'>Привет, {currentUser.name}</h1>
                <form className='account__form' id='form' onSubmit={handleSubmitForm} noValidate>
                    <ul className='account__info'>
                        <li className='account__box'>
                            <span className='account__name'>Имя</span>
                            <input type='text' name='name' className='account__username' placeholder='Имя' onChange={handleChange} value={values.name || ''} disabled={!isFormEditable} ref={nameRef} minLength={2} maxLength={30} required />
                        </li>
                        <span className='account__error'>{errors.name}</span>

                        <li className='account__box'>
                            <span className='account__email'>E-mail</span>
                            <input type='email' name='email' className='account__useremail' placeholder='Почта' onChange={handleChange} value={values.email || ''} disabled={!isFormEditable} pattern={EMAIL_PATTERN} required></input>
                        </li>
                        <span className='account__error'>{errors.email}</span>

                        <span className='account__unsuccess'>{updateError}</span>

                    </ul>

                    {
                        isFormEditable
                            ? <button type='submit' className={isFormValid ? 'account__edit account__edit_save' : 'account__edit account__edit_disabled'} disabled={!isFormValid || recentValues}>Сохранить</button>
                            : <button type='button' className='account__edit account__edit_edit' onClick={handleEditData}>Редактировать</button>
                    }
                </form>


                <button type='button' onClick={onSignOut} className='account__exit'>Выйти из аккаунта</button>
            </section>
        </>
    )
}