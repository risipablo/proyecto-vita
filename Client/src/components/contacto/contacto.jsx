import React, { useState } from 'react';
import "./contacto.css";
import {toast, Toaster} from 'react-hot-toast';


export function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  
    setErrors({
      ...errors,
      [e.target.name]: '' 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email) newErrors.email = 'El email es obligatorio';
    if (!formData.phone) newErrors.phone = 'El teléfono es obligatorio';
    if (!formData.reason) newErrors.reason = 'El motivo es obligatorio';
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      toast.promise(
        fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          
        }),
        {
          loading: 'Enviando...',
          success: 'Correo enviado',
          error: 'Error al enviar el correo',
        }
      )
      .then(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          reason: '',
          message: ''
        });
      })
      .catch((error) => console.error('Error:', error));
    }
  };
  

  return (
    <div className="contact-container">
      <div className="consulta-container">
        <div className="consulta">
          <h3>¿Tenes consultas pendientes?</h3>
          <p>Llamanos o envianos un WhatsApp. También podés completar el formulario y un agente se contactará contigo a la brevedad.</p>
          <div className="consultas">
            <h4>Horarios de atención:</h4>
            <ul>
              <li>Lunes: 09:00 – 20:00</li>
              <li>Martes: 09:00 – 20:00</li>
              <li>Miércoles: 09:00 – 20:00</li>
              <li>Jueves: 09:00 – 20:00</li>
              <li>Viernes: 09:00 – 20:00</li>
              <li>Sábado y Domingo: CERRADO</li>
            </ul>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.179527159179!2d-67.99396493804949!3d-38.94203748850425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30f916b6ca4d%3A0x1f51c4828bc567a9!2sGral.%20Fern%C3%A1ndez%20Oro%20720%2C%20R8324%20Cipolletti%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1724451618675!5m2!1ses!2sar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
            className={errors.name ? 'error' : ''}
            required
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su email"
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ingrese su teléfono"
            className={errors.phone ? 'error' : ''}
            required
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}

          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={errors.reason ? 'error' : ''}
            required
          >
            <option value="">Selecciona un motivo</option>
            <option value="consultas">Consultas</option>
            <option value="turnos">Turnos</option>
          </select>
          {errors.reason && <span className="error-text">{errors.reason}</span>}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí"
            rows="4"
            className={errors.message ? 'error' : ''}
            required
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button className='consul' type="submit">Enviar</button>
        </form>
        <Toaster/>
      </div>
    </div>
  );
}
