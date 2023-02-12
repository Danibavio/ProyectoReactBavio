import React from 'react';
import './styles/Item.css'

function Item({ id, pictureUrl, title, price }) {
    return (
    <div className='item-card'>
    <h2>{title}</h2>
    <p>Precio: ${price}</p>
    </div>
);
}

export default Item;