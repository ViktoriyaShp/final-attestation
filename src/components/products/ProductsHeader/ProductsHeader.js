import React from 'react';

import './ProductsHeader.css';

import basket from '../../../assets/basket.png'

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header =() => {
    
    const counter = useSelector(({productReducer}) => productReducer.counter)
    const totalPrice = useSelector(({productReducer}) => productReducer.totalPrice)

    function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; 
        const n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }

    let navigate = useNavigate();

    const onCartButtonClickHandler = () => {
        return navigate('/module-react/basket')
    };

    return (
        <div className='header'>
            <div className='header_products'>
                <h1 className='header_title'>наша продукция</h1>
                <div className='header_basket-btn'>
                    <button className='header_basket' onClick={onCartButtonClickHandler}>
                        <div className='header_price'>
                            <p>{counter} {declOfNum(counter, ['товар', 'товара', 'товаров'])}<br />на сумму {totalPrice} ₽</p>
                            <img src={basket} alt="" />
                        </div>
                    </button>
                    <button className='header_btn'>
                        <p className='header_txt'>Выйти</p>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Header;