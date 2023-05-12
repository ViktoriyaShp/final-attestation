import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/elements/card';
import { product } from '../../product';
import './Products.css';
import {useSelector} from 'react-redux';
import Button from '../../components/button/button';
import bag from '../../assets/bag.svg'


function Products() {

    const productsSum = useSelector(state => state.basket.pricesProducts)

    const productsVolume = useSelector(state => state.basket.count)

    function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; 
        const n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 === 1) { return text_forms[0]; }
        return text_forms[2];
    }

    return (
    <main className="main">
        <div className="container">
        <header className='header'>
            <h1>наша продукция</h1>
            <div className='bag'>
            <div className="bag-left">
                <p className='product'>{productsVolume} {declOfNum(productsVolume, ['товар', 'товара', 'товаров'])}</p>
                <p className='sum'>на сумму {productsSum} ₽</p>
            </div>
            <Link to={'/basket'} className='link'><img src={bag} alt="" /></Link>
            {<Button />}
            </div>
        </header>

            <div className="menu">
                {
                product.map((item, index) => {
                    const {url, title, desc, price, weight, id, idx} = item;
                    return (//key должен передаваться родительскому объекту
                        <Link key = {index} item={item.id} to={`*/${id}`}>
                            <Card 
                                id = {id}
                                idx = {idx}
                                url = {url}
                                title = {title}
                                desc = {desc}
                                price = {price}
                                weight = {weight}
                            />
                        </Link>
                    )
                })
                }
            </div>
        </div>
    </main>
    );
}

export default Products;
