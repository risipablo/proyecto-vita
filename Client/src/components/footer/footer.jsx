import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './footer.css'; // Aquí cargamos el archivo CSS

export function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-items-container">
                <div className="footer-item">
                    <a href="https://www.instagram.com/casavita.salud/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram icon"></i> {/* Ícono de Instagram de Font Awesome */}
                    </a>
                    <span className="footer-text">casa.vita</span>
                </div>
                <div className="footer-item">
                    <i className="fas fa-envelope icon"></i> {/* Ícono de Email de Font Awesome */}
                    <span className="footer-text">casavita720@gmail.com</span>
                </div>
                <div className="footer-item">
                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.179527159179!2d-67.99396493804949!3d-38.94203748850425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30f916b6ca4d%3A0x1f51c4828bc567a9!2sGral.%20Fern%C3%A1ndez%20Oro%20720%2C%20R8324%20Cipolletti%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1724451618675!5m2!1ses!2sar" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-map-marker-alt icon"></i> {/* Ícono de Ubicación de Font Awesome */}
                    </a>
                    <span className="footer-text">Gral. Férnandez Oro 720</span>
                    
                </div>
            </div>
            <div className='footer-final'>
                <p><strong>Casa Vita</strong> se reserva todos los derechos</p>
            </div>
        </div>
    );
}