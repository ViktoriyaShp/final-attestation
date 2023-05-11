import React from 'react';

import CardDescription from '../../components/products/ProductDescriptionCard/ProductDescriptionCard'
import Header from '../../components/products/ProductsHeader/ProductsHeader'


// import './ProductDescription.css';

import { useState } from 'react';

const ProductDescription =() => {

    const [items, setItems] = useState([]);
    const [amountPrice, setAmountPrice] = useState(0);

    
    return (
        <div> 
            <Header amountPrice={amountPrice} />
            <div>{
                items.map(product => 
                <CardDescription 
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                weight={product.weight}
                />)
            }</div>
        </div> 
        )
    }

export default ProductDescription;