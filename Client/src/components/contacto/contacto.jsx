import React, { useState } from 'react';
import './contacto.css';

export function Contacto() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '299',
        reason: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log(formData);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contacto</h2>
            <div className="form-group">
                <label htmlFor="name">Ingrese nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Ingrese número</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="reason">Elija el motivo</label>
                <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una opción</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Turno">Turno</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">Área de texto</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
        </form>
    );
}
