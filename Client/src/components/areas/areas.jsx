import { motion } from "framer-motion";
import card1 from "./image/psicologia.png";
import card2 from "./image/funcional.png";
import card3 from "./image/kinesio.png";
import card4 from "./image/yoga.png";
import card5 from "./image/nutricion.png";
import "./areas.css";

export function Areas() {
    const personal = [ 
        { id: 1, profesion: "Psicología", image: card1 },
        { id: 2, profesion: "Funcional", image: card2 },
        { id: 3, profesion: "Kinesiología - Osteopatía", image: card3 },
        { id: 4, profesion: "Yoga", image: card4 },
        { id: 5, profesion: "Nutrición", image: card5 }
    ];

   
    const cardVariant = {
        hidden: { opacity: 0, rotate: -10, y: 20 }, 
        visible: { opacity: 1, rotate: 0, y: 0 }, 
    };

    return (
        <div className="container-areas">
            <h2> AREAS</h2>
            <div className="personal-list">
                {personal.map(person => (
                    <motion.div 
                        key={person.id} 
                        className="personal-card-css"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariant}
                        transition={{ duration: 0.5, delay: person.id * 0.2 }} 
                    >
                        <h3>{person.profesion}</h3>
                        <img src={person.image} alt={person.profesion} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
