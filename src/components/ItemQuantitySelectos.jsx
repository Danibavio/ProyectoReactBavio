import React, { useState } from "react";

const ItemQuantitySelector = () => {
    const [quantity, setCantidad] = useState(1);

    const ReducirProducto = () => {
        if (quantity > 1) {
            setCantidad(quantity - 1);
        }
    };

    const AumentarProducto = () => {
        setCantidad(quantity + 1);
    };

    return (
        <div className="item-cantidad">
            <button onClick={ReducirProducto}>-</button>
            <span>{quantity}</span>
            <button onClick={AumentarProducto}>+</button>
        </div>
    );
};

export default ItemQuantitySelector;