import "./dueños.css"
import d1 from "../imagenes/psicologa.jpg"
import d2 from "../imagenes/funcional.jpg"
import d3 from "../imagenes/kine.jpg"


export function Dueños(){

    const dueños = [
        {id:1 , nombre:"Sabrina Ramos", rol:"Psicóloga", image:d1},
        {id:1 , nombre:"Rodrigo Feijoo", rol:"Entrenador Fisico", image:d2},
        {id:1 , nombre:"Daian Rodríguez", rol:"Lic. en Kinesiología", image:d3}
    ]

    return(
        <section className="container-dueños">
            <h2> ¿Quienes Somos? </h2>
            <div className="list-dueños">
                {dueños.map(dueño => (
                    <ul key={dueño.id} className="dueños-card">
                        <img src={dueño.image} alt={dueño.rol} />
                        <h3>{dueño.nombre}</h3>
                        <p>{dueño.rol}</p>
                    </ul>
                ))}
            </div>
        </section>
    )
}