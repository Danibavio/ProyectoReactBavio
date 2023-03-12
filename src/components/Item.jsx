import React from 'react';
import './styles/Item.css'

function Item({ id, title, precio, pictureUrl }) {
    return (
    <div className='item-card'>
    <img src={pictureUrl} alt={title}/>
    <h2>{title}</h2>
    <p>Precio: ${precio}</p>
    </div>
);
}

export default Item;