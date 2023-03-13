

const CartItem = (props) => {
    console.log('props', props);
    return (
        <div className="cart-item">
            {props.producto?.pictureUrl && (
                <img src={props.producto.pictureUrl} alt={props.producto.title} />
            )}
            <div>
                <h3>{props.producto?.title}</h3>
                <p>Cantidad: {props.cantidad}</p>
                <p>Precio Total: $ {(props.precioTotal)}</p>
            </div>
        </div>

    );
};

export default CartItem