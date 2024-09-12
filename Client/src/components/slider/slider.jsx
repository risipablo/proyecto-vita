
import vitaImage3 from '../imagenes/movis.png';
import vitaImage from '../imagenes/saluds.png'
import vitaImage2 from '../imagenes/bienestars.png'
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./slider.css"


export function Slider(){

    const imageVariant = {
        hidden: { opacity: 0, y: 20 }, // Comienza fuera de vista
        visible: { opacity: 1, y: 0 }, // Aparece en su posición normal
    };


    return(
        <div className="inicio" id="inicio" >

            <div className='container-image'>
  <motion.img 
                    src={vitaImage} 
                    alt="" 
                    initial="hidden"
                    animate="visible"
                    variants={imageVariant}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.img 
                    src={vitaImage2} 
                    alt="" 
                    initial="hidden"
                    animate="visible"
                    variants={imageVariant}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.img 
                    src={vitaImage3} 
                    alt="" 
                    initial="hidden"
                    animate="visible"
                    variants={imageVariant}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
            </div>

        <div className='carousel'>
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
        </div>

            <button className="turno" >
                <a href="https://wa.me//2996551204"> <p> Consultas por turnos </p> </a> 
            </button> 
        </div>
    )
}