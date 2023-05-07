import React, { useState } from 'react';

import './ProductsCard.css'

import { useDispatch } from 'react-redux';

import { add, remove } from '../../../store/reducers/products';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';


const Card = ({id, image, title, description, price, weight}) => {

    // const onAddToCartClickHandler = () => {

    //     const cart = JSON.parse(localStorage.getItem('cart')) || [];

    //     const product = {id, image, title, price}

    //     cart.push(product)

    //     localStorage.setItem('cart', JSON.stringify(cart))
    // }

    const dispatch = useDispatch();

    const [isAdded, setAddState] = useState(false);
    
    const addToRedux = () => {

        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

        const product = {id, title, image, price};

        currentCart.push(product);

        localStorage.setItem('cart', JSON.stringify(currentCart))

        dispatch(add({ id, title, price }));

        setAddState(prevState => !prevState);
    };

    const removeFromRedux = (id) => {

        const cart = JSON.parse(localStorage.getItem('cart')) || []; 

        const updCart = cart.filter(item => item.id !== id)

        localStorage.setItem('cart', JSON.stringify(updCart))

        dispatch(remove({ id }))

        setAddState(prevState => !prevState);
    };

    return (

            <div className={'card'}>
                
                <img className={'image'} src={image} alt='product'/>
                <div className='txt'>
                    <p className={'text title'}>{title}</p>
                    <p className={'text description'}>{description}</p>
                </div>
                <div className='wrapper'>
                    <p className={' text price'}>{price} ₽ / <span>{weight} г.</span></p>
                    <button 
                        className={'add-to-cart-button'}
                        onClick={isAdded ? removeFromRedux : addToRedux}>
                        <FontAwesomeIcon icon={isAdded ? faXmark : faPlus} size='xl' color=' #FFFFFF'/>
                    </button>
                </div>
            </div>
    )
}

export default Card;