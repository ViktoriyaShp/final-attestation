import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/productCard';
import Button from '../../components/button/button.js';
import style from './Product.module.css';
import { product } from '../../product.js';
import {useSelector} from 'react-redux';
import bag from '../../assets/bag.svg'
import vector from '../../assets/Vector.svg'

function Product() {
    const {id} = useParams()
    const {url, title, desc, price, weight} = product.find(item => item.id === id)//с помощью UseParams вытаскиваем нужный id и уже ищем его с помощью find и проваливаемся в карточку нужного id

    const productsSum = useSelector(state => state.basket.pricesProducts)

    const productsVolume = useSelector(state => state.basket.count)

    const navigate = useNavigate()
    const back = () => navigate(-1)//функция для возврата на предыдущую страницу

    //функция для склонения слов
    function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; 
        const n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 === 1) { return text_forms[0]; }
        return text_forms[2];
    }

    return (
        <div className={style.product}>
            <div className={style.container}>
                <header className={style.header}>
                    <button onClick={back} className={style.linkBasket}><img className={style.back} src={vector}  alt=''/></button>
                    <div className={style.headerRight}>
                        <div className={style.bag}>
                        <div className={style.bagLeft}>
                            <p >{productsVolume} {declOfNum(productsVolume, ['товар', 'товара', 'товаров'])}</p>
                            <p >на сумму {productsSum} ₽</p>
                        </div>
                        <Link to={'/basket'} className={style.link}>
                            <img src={bag} alt=""/></Link>
                        </div>
                        {<Button />}
                    </div>
                </header>
                {
                    <ProductCard 
                        id={id}
                        url={url}
                        title={title}
                        desc={desc}
                        price={price}
                        weight={weight}
                    />
                }
            </div>
        </div>
    )
}

export default Product;