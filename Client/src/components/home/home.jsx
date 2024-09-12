
import { NavLink } from 'react-router-dom';
import { Areas } from '../areas/areas';
import { Dueños } from '../dueños/dueños';
import { Slider } from '../slider/slider';
import { Staff } from '../staff/staff';
import "./home.css"
import { Helmet } from 'react-helmet';


export function Home(){

    return(
        <div className="container-home">

            <Helmet>
                <title>Inicio - Casa Vita</title>
            </Helmet>

            <Slider/>
            <Areas/>
            <Dueños/>
            <Staff/>

            <section id='ubicacion' className='container-ubicacion'>
                <h2> UBICACIÓN</h2>
                <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.179527159179!2d-67.99396493804949!3d-38.94203748850425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30f916b6ca4d%3A0x1f51c4828bc567a9!2sGral.%20Fern%C3%A1ndez%20Oro%20720%2C%20R8324%20Cipolletti%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1724451618675!5m2!1ses!2sar"
                 width="100%" height="450" style={{ border: 0 }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
                </div>
            </section>

            <section className="contacto-container">
                <h3> Para turnos y consultas, visita la sección de contacto</h3>
                <NavLink to="/contacto" className="contacto-link">
                    Ver más
                </NavLink>
            </section> 

        </div>
    )
}