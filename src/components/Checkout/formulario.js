import { useState } from 'react';
import './formulario.css'

const Formulario = ({ onSubmit }) => {
    const [formDatos, setFormDatos] = useState({
        nombre: '',
        celular: '',
        email: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormDatos((prevDatos) => ({ ...prevDatos, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formDatos);
    };

    return (
        <form onSubmit={handleSubmit} className='formulario'>
            <div className='form-info'>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formDatos.nombre}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className='form-info'>
                <label htmlFor="celular" >Teléfono:</label>
                <input 
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formDatos.celular}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className='form-info'>
                <label htmlFor="email" >Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formDatos.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className='buttonForm'>Enviar pedido</button>
        </form>
    );
};

export default Formulario;