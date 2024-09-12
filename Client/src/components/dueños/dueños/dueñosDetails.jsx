import { useParams } from "react-router-dom"
import "./details.css"
import d1 from "../image/psicologa.jpg"
import d2 from "../image/funcional.jpg"
import d3 from "../image/kine.jpg"
import { Helmet } from "react-helmet"

export function DueñosDetails(){
    const {id} = useParams();

    const dueños = [
        { id: 1, nombre: "Sabrina Ramos", rol: "Licenciada en Psicología", image:d1, especialidades: "Psicología Clínica Integral (Adolescentes y Adultos), Técnicas basadas en Bioneuroemoción, Programación Neurolingüística, Técnicas de cambio de creencias, Terapia Transgeneracional, Terapia Floral, Neurorehabilitación"},
        { id: 2, nombre: "Rodrigo Feijoo", rol: "Entrenador Fisico", image:d2, especialidades:"Instructor en Musculación y Monitoreo de Gimnasio, Instructor en Entrenamiento Funcional y HIIT, Instructor en Crosstraining, Asesoramiento en Nutrición Deportiva" },
        { id: 3, nombre: "Daian Rodríguez", rol: "Lic. en Kinesiología", image:d3, especialidades:"Kinesiología, Fisioterapia, Osteopatía, Neurorehabilitación, MEP"  }
    ];


    const dueño = dueños.find(d => d.id === parseInt(id))

    return(
        <div className="detail-container">

            <Helmet>
                <title> Nosotros </title>
            </Helmet>
            
            <div className="detail-list">
                <div className="detail-image">
                    <img src={dueño.image} alt={dueño.rol} />
                    <h3>{dueño.nombre}</h3>
                    <h4>{dueño.rol}</h4>
                </div>

                <div className="texto">
                    <p> Especialidades </p>
                    {dueño.especialidades && (
                        <ul className="especialidades-list">
                            
                            {dueño.especialidades.split(',').map((especialidad,index) => (
                                <li key={index}>{especialidad}</li>
                            ))}
                        </ul>
                    )}
                </div>
 
            </div>
        </div>
    )
}