import React, { useState } from 'react';
import './card.css';
import {useDispatch} from 'react-redux';
import { addProduct, removeProductBasket } from '../../store/reducers/basket.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function Card({id, url, title, desc, price, weight, idx}) {

    const dispatch = useDispatch()

    const [isAdded, setAddState] = useState(false);

    let item = {
        id: id,
        url: url,
        title: title,
        price: price,
    }

    const handleAddProduct = (event) => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(addProduct(item))

        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

        const product = {id, title, url, price};

        currentCart.push(product);

        localStorage.setItem('cart', JSON.stringify(currentCart))

        setAddState(prevState => !prevState);
    }

    const handleRemoveProduct = (event) => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(removeProductBasket(idx))

        const cart = JSON.parse(localStorage.getItem('cart')) || []; 

        const updCart = cart.filter(item => item.id !== id)

        localStorage.setItem('cart', JSON.stringify(updCart))

        setAddState(prevState => !prevState);
    }

return (

    <div className="card">
        <img className="card__img" src={url} alt="" />

        <div className="card__information">

            <div className="card__up">
                <h2 className="card__title">{title}</h2>
                <p className="card__desc">{desc}</p>
            </div>

            <div className="card__down">
                <div className="left">
                    <div className="card__down-price">{price} ₽</div>
                    <div className="card__down-weight"> / {weight} г.</div>
                </div>

                <button 
                    className='card__down-plus'
                    onClick={isAdded ? handleRemoveProduct : handleAddProduct}>
                    <FontAwesomeIcon icon={isAdded ? faXmark : faPlus} size='xl' color=' #FFFFFF'/>
                </button>
            </div>
        </div>
    </div>
);
}

export default Card;
