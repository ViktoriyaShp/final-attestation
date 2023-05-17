import React, { useState } from 'react';
import style from './productCard.module.css'
import {useDispatch} from 'react-redux';
import { addProduct, removeProductBasket } from '../../store/reducers/basket.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function ProductCard({url, title, desc, price, weight, id, idx}) {

    const dispatch = useDispatch()

    const [isAdded, setAddState] = useState(false);

    let item = {
        id: id,
        url: url,
        title: title,
        desc: desc,
        price: price,
        weight: weight,
    }

    //функция добавления товаров в корзину
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
    
    //функция удаления товаров из корзины
    const handleRemoveProduct = (event) => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(removeProductBasket(idx))

        const cart = JSON.parse(localStorage.getItem('cart')) || []; 

        const updCart = cart.filter(item => item.id !== id)

        localStorage.setItem('cart', JSON.stringify(updCart))

        setAddState(prevState => !prevState);
    }

    return(
        <div className={style.productCard}>
            <img className={style.image} src={url} alt=''></img>
            <div className={style.information}>
                <h2 className={style.title}>{title}</h2>
                <div className={style.descr}>{desc}</div>
                <div className={style.bottom}>
                    <div className={style.left}>
                        <div className={style.price}>{price} ₽ / </div>
                        <div className={style.weight}> {weight} г.</div>
                    </div>
                    
                    <button 
                        className={style.button}
                        onClick={isAdded ? handleRemoveProduct : handleAddProduct}>
                        <FontAwesomeIcon icon={isAdded ? faTrash : faCartPlus} size='xl' color=' #FFFFFF'/>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard;