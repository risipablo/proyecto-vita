
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

    return (
        <div className="container-areas">
            <h2> Areas </h2>
            <div className="personal-list">
                {personal.map(person => (
                    <div key={person.id} className="personal-card-css">
                        <h3>{person.profesion}</h3>
                        <img src={person.image} alt={person.profesion} />
                    </div>
                ))}
            </div>
        </div>
    );
}
