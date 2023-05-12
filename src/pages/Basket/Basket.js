import React from 'react';
import {useNavigate} from 'react-router-dom';
import BasketCard from '../../components/elements/basketCards';
import './basket.css';
import {useSelector} from 'react-redux';
import Button from '../../components/button/button';
import vector from '../../assets/Vector.svg'

function Basket() {
    
    const navigate = useNavigate()
    const back = () => navigate(-1) //функция для возврата на предыдущую страницу

    const basket = useSelector(state => state.basket.basket)
    const basketSum = useSelector(state => state.basket.pricesProducts)

    return (
        <div className="basket">
            <div className="basket__header">
                    <button onClick={back} className='link-basket'><img className="back" src={vector} alt=''/></button>
                    <h1>Корзина с выбранными товарами</h1>
                    {<Button />}
                </div>
            <div className="container-basket">
                <div className="basketCards">
                    {
                        basket.map((item, index) => {
                            const{id, url, title, price, idx} = item
                            return(
                                    <BasketCard 
                                        id = {id}
                                        idx = {idx}
                                        key = {index}
                                        url = {url}
                                        title = {title}
                                        price = {price}
                                    />
                            )
                        })    
                    }
                </div>
            </div>

            <footer className="footer">
                <div className="container-basket">
                    <div className="footer-desc">
                        <p className="footer__text">Заказ на сумму:</p>
                        <p className="footer__sum">{basketSum} ₽</p>
                    </div>
                    <button className="footer__btn">Оформить заказ</button>
                </div>
            </footer>
        </div>
    )
}

export default Basket;