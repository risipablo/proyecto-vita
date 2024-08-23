
import { Areas } from '../areas/areas';
import { Dueños } from '../dueños/dueños';
import vitaImage3 from '../imagenes/movi.png';
import vitaImage from '../imagenes/salud.png'
import vitaImage2 from '../imagenes/BIENESTAR.png'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Staff } from '../staff/staff';
import "./home.css"



export function Home(){

    return(
        <div className="container-home">
            <div className="inicio" >

            <Carousel showThumbs={true} autoPlay infiniteLoop>  
                <div>
                    <section className="image-home">
                        <img src={vitaImage} alt="Vita 1" className="responsive-image" />
                    </section>
                </div>
                <div>
                    <section className="image-home">
                        <img src={vitaImage2} alt="Vita 2" className="responsive-image" />
                    </section>
                </div>
                <div>
                    <section className="image-home">
                        <img src={vitaImage3} alt="Vita 3" className="responsive-image" />
                    </section>
                </div>
            </Carousel>
                <button className="turno" >
                    <a href="https://wa.me//2996551204"> <p> Consultas por turnos </p> </a> 
                </button> 
            </div>

            <Areas/>
            <Dueños/>
            <Staff/>
        </div>
    )
}