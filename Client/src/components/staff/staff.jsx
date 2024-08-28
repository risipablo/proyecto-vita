import "./staff.css"
import equipo from "../imagenes/equipo.png"
import { NavLink } from "react-router-dom"

export function Staff(){

    return(
        <section className="container-staff">
            <div className="image-container">
                <img src={equipo} alt="equipo" />
                <NavLink to="/personal"  >
                    <button className="ver-mas-btn">
                    Ver Más
                    </button>
                      
                </NavLink> 
                    
            </div>
        </section>
    )
}