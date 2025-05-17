import { useParams } from "react-router-dom"
import "./details.css"
import d1 from "../image/psicologa.jpg"
import d2 from "../image/funcional.jpg"
import d3 from "../image/kine.jpg"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion" // <-- Agregado

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
            
            <motion.div 
                className="detail-list"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="detail-image"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src={dueño.image} alt={dueño.rol} />
                    <h3>{dueño.nombre}</h3>
                    <h4>{dueño.rol}</h4>
                </motion.div>

                <motion.div 
                    className="texto"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p> Especialidades </p>
                    {dueño.especialidades && (
                        <motion.ul 
                            className="especialidades-list"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            {dueño.especialidades.split(',').map((especialidad,index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    {especialidad}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}