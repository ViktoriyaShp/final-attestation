import React from 'react';

import './BasketHeader.css';

import vector from '../../../assets/Vector.png'

import { useNavigate } from 'react-router-dom';

const HeaderBasket =() => {

    let navigate = useNavigate();

    const onBackButtonClickHandler = () => {
        return navigate('/module-react')
    };

    const onButtonClickSignIn = () => {
        return navigate('/auth')
    };

    return (
        <div className='basket'>
            <div className='basket_header'>
                <button className='basket_btn' onClick={onBackButtonClickHandler}>
                    <img src={vector} alt="" />
                </button>
                <h1 className='basket_title'>Корзина с выбранными товарами</h1>
            </div>
            <button className='basket_header-btn' onClick={onButtonClickSignIn}>
                <p className='basket_header-txt'>Выйти</p>
            </button>
        </div>
    )
}

export default HeaderBasket;