import React from 'react';

import './ProductDescriptionCard.css';

import vector1 from '../../../assets/Vector1.png'

const CardDescription = ({id, image, title, price, weight}) => {


    return (
            <div className={'card-basket'}>
                <img className={'description-image'} src={image} alt='basket'/>
                <p className={''}>{title}</p>
                <p className={' text price'}>{price} ₽ / <span>{weight} г.</span></p>
                <button className={'add-to-cartbasket-button'}>
                    <img src={vector1} alt="" />
                </button>
            </div>
    )
}

export default CardDescription;