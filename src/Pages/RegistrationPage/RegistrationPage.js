import React, { useEffect, useState } from 'react';

import './RegistrationPage.css';

const Registration =() => {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Поле не должно быть пустым')
    const [passwordError, setPasswordError] = useState('Поле не должно быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный логин')
        }else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.langth < 4) {
            setPasswordError('Логин должен содержать не менее 4-х символов')
        }else {
            setEmailError('')
        }
    }

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

    return (
    <div class="login-form">
        <a href="" class="link">Авторизоваться</a>
        <h1 class="login-header">Регистрация</h1>
        
        <div class="login-email">
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
            <input onChange={e => emailHandler(e) } value={email} onBlur={e => blurHandler(e)} name='email' type='email' placeholder='Логин' />
        </div>
    
        <div class="login-password">
            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e) } value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Пароль' />
        </div>

        <div class="checkbox">
            <div class="flex-class-checkbox">
                <div class="login-form__checkbox-wrapper">
                    <input class="login-form__checkbox_input" type="checkbox" id="checkbox-input" />
                    <div class="form__custom-checkbox" id="custom-checkbox"></div>
                </div>
                <label for="checkbox-input">Я согласен получать обновления на почту</label>
            </div>
        </div>
        <div class="button-wrapper">
                <button disabled={!formValid} className="button-wrapper_btn">Зарегистрироваться</button>
        </div>
    </div>

    );
}

export default Registration;