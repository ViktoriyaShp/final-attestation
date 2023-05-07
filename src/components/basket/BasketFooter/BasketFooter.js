import React from 'react';

import './BasketFooter.css';

const FooterBasket =({amountPrice}) => {

    return (
        <div className='footer'>
            <hr></hr>
            <div className='basket_footer'>
                <p className='basket_sum'>Заказ на сумму:</p>
                <p className='footer-sum'>{amountPrice} ₽</p>
                <button className='order_btn'>
                    <p className='order_txt'>Оформить заказ</p>
                </button>
            </div>
        </div>
    )
}

export default FooterBasket;