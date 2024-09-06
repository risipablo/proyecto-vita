import "./dueños.css"
import d1 from "./image/psicologa.jpg"
import d2 from "./image/funcional.jpg"
import d3 from "./image/kine.jpg"
import { NavLink } from "react-router-dom"


export function Dueños(){

    const dueños = [
        {id:1 , nombre:"Sabrina Ramos", rol:"Psicóloga", image:d1},
        {id:2 , nombre:"Rodrigo Feijoo", rol:"Entrenador Fisico", image:d2},
        {id:3 , nombre:"Daian Rodríguez", rol:"Lic. en Kinesiología", image:d3}
    ]

    return(
        <section className="container-dueños">
            <h2> ¿QUIENES SOMOS? </h2>
            <div className="list-dueños">
                {dueños.map(dueño => (
                    <NavLink  to={`/dueños/${dueño.id}`} key={dueño.id} className="dueños-card">
                        <img src={dueño.image} alt={dueño.rol} />
                        <h3>{dueño.nombre}</h3>
                        <h4>{dueño.rol}</h4>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}