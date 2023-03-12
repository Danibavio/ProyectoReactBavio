import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ openCart }) => {
    return (
        <div className='cart-widget' onClick={openCart}>
            <FaShoppingCart />
        </div>
    );
};

export default CartWidget;