import React, { useEffect, useState } from 'react';

// import { useNavigate } from 'react-router-dom';

import './RegistrationPage.css';

const Auth =() => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Поле не должно быть пустым')
    const [passwordError, setPasswordError] = useState('Поле не должно быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [isAuthView, setAuthViewState] = useState(false);

    // const navigate = useNavigate();

    const signUp = (data) => {
        localStorage.setItem(data.email, JSON.stringify({ 'userEmail': email, 'userPassword': password }));
        console.log(localStorage.getItem(data.email));
    };

    const signIn = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { 
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };

    const authView = 

    <div className="login-form">
        <h1 className="login-header">Вход</h1>
        <div className="input-email">
            <input className="login-email" onChange={e => emailHandler(e) } value={email} onBlur={e => blurHandler(e)} name='email' type='email' placeholder='Логин' />
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
        </div>
        <div className="input-password">
            <input className="login-password" onChange={e => passwordHandler(e) } value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Пароль' />
            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
        </div>
        <div className="button-wrapper">
            <button disabled={!formValid} onClick={signIn} className="button-wrapper_btn">Войти</button>
        </div>
    </div>;


    const regView = 

    <div className="login-form">
        <h1 className="login-header">Регистрация</h1>
        <div className="input-email">
            <input className="login-email" onChange={e => emailHandler(e) } value={email} onBlur={e => blurHandler(e)} name='email' type='email' placeholder='Логин' />
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
        </div>
        <div className="input-password">
            <input className="login-password" onChange={e => passwordHandler(e) } value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Пароль' />
            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
        </div>
        <div className="checkbox">
            <div className="flex-class-checkbox">
                <div className="login-form__checkbox-wrapper">
                    <input className="login-form__checkbox_input" type="checkbox" id="checkbox-input" />
                    <div className="form__custom-checkbox" id="custom-checkbox"></div>
                </div>
                <label form="checkbox-input">Я согласен получать обновления на почту</label>
            </div>
        </div>
        <div className="button-wrapper">
            <button disabled={!formValid} onClick={signUp} className="button-wrapper_btn">Зарегистрироваться</button>
        </div>
    </div>;

    const changeView = () => {
        setAuthViewState((prevState) => !prevState);
    };

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
        if (e.target.value.length < 4) {
            setPasswordError('Пароль должен содержать не менее 4-х символов')
            if(!e.target.value) {
                setPasswordError('Поле не должно быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case email:
                setEmailDirty(true)
                break
            case password:
                setPasswordDirty(true)
                break
            default:
                // do nothing
        }
    }

    return (
        <>
        <button className='link' onClick={changeView}>{isAuthView ? 'Зарегистрироваться' : 'Авторизоваться'}</button>
        {isAuthView ? authView : regView}
        </>
    );
};

export default Auth;

