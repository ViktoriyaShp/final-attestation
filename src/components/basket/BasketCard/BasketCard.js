import React from 'react';

import './BasketCard.css';

import vector1 from '../../../assets/Vector1.png'


const CardBasket = ({id, image, title, price, onRemoveHandler}) => {

    const onRemoveFromCartHandler = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []; 

        const updCart = cart.filter(item => item.id !== id)

        localStorage.setItem('cart', JSON.stringify(updCart))

        onRemoveHandler(updCart)
    }

    return (
            <div className={'card-basket'}>
                <img className={'card-basket_image'} src={image} alt='basket'/>
                <p className={'text card-basket_title'}>{title}</p>
                <p className={' text card-basket_price'}>{price} ₽</p>
                <button className={'add-to-cartbasket-button'} onClick={onRemoveFromCartHandler}>
                    <img src={vector1} alt="" />
                </button>
            </div>
    )
}

export default CardBasket;