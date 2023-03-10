import React from 'react';
import Item from './Item';

function ItemList({ productos }) {
    console.log('productos', productos)
    return (
        <div>
            {productos.map(producto => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
}

export default ItemList;