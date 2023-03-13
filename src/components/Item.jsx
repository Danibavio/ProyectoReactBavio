import React from 'react';
import './styles/Item.css'

function Item({ producto }) {
    const { title, precio, pictureUrl } = producto;
    return (
        <div className='item-card'>
            <img src={pictureUrl} alt={title}/>
            <h2>{title}</h2>
            <p>Precio: ${precio}</p>
        </div>
    );
}

export default Item;