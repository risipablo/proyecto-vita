import "./staff.css";
import { NavLink } from "react-router-dom";

export function Staff() {
  return (
    <section id="equipo" className="container-staff">
      <h2> NUESTRO EQUIPO</h2>
      <div className="image-container">
        <p>Contamos con una amplia plantilla de profesionales</p>

      </div>
      <NavLink to="/personal">
          <button className="ver-mas-btn">
            Ver Más
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </NavLink>
    </section>
  );
}
