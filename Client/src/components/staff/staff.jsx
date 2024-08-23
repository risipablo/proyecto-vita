import "./staff.css"
import equipo from "../imagenes/equipo.png"

export function Staff(){

    return(
        <section className="container-staff">
            <div className="image-container">
                <img src={equipo} alt="equipo" />
                <button className="ver-mas-btn">Ver Más</button>
            </div>
        </section>
    )
}