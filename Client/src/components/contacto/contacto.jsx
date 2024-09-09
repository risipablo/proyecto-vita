import React from 'react';
import "./contacto.css";

export function Contacto() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
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
    console.log('Form data:', formData);
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
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ingrese su teléfono"
            required
          />

          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un motivo</option>
            <option value="consultas">Consultas</option>
            <option value="turnos">Turnos</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí"
            rows="4"
            required
          ></textarea>

          <button className='consul' type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
