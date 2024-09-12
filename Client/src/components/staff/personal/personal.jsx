
import { useState } from "react"
import "./personal.css"
import personalData from "./personalData.json"
import Helmet from 'react-helmet'


export function Personal(){
    const [data] = useState(personalData);

    return(
        <div className="personal-container">

        <Helmet>
            <title>Especialestas - Casa Vita</title>
        </Helmet>
            
            <h2> ESPECIALISTAS</h2>

            <div className="listado">
                {data.map(persona => (
                    <div className="card" key={persona.id}>
                        {/* <img src={persona.imagen} alt={persona.nombre} /> */}
                        <div className="card-content">
                            <h3>{persona.nombre}</h3>
                            <h4>{persona.rol}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}