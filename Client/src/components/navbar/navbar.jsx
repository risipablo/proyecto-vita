import { NavLink } from "react-router-dom";
import './navbar.css'
import { useState } from "react";
import logo  from '../imagenes/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';


export function Navbar(){
    const [openMenu, setOpenMenu] = useState (false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
        document.body.classList.toggle('open',!openMenu)
    }

    
    const close = () => {
        setOpenMenu(false);
        document.body.classList.remove('open')
    }


    return(
        <nav>
            <div className={`overlay ${openMenu ? 'open' : ''}`} onClick={close}> </div>
            <div className="container-navbar">
                <div className="navbar">
                    <div className={`menu ${openMenu ? 'open' : ''}`} >
                        <ul>
                            <NavLink className='active' to="/">
                                <div className="nav-item">
                                    <HomeIcon />
                                    <p>Inicio</p>
                                </div>
                            </NavLink>
                            <NavLink className='active'>
                                <div className="nav-item">
                                    <BusinessIcon />
                                    <p>Areas</p>
                                </div>
                            </NavLink>
                            <NavLink className='active'>
                                <div className="nav-item">
                                    <InfoIcon />
                                    <p>¿Quienes Somos?</p>
                                </div>
                            </NavLink>
                            <NavLink className='active'>
                                <div className="nav-item">
                                    <GroupIcon />
                                    <p>Equipo</p>
                                </div>
                            </NavLink>
                            <NavLink className='active'>
                                <div className="nav-item">
                                    <LocationOnIcon />
                                    <p>Ubicación</p>
                                </div>
                            </NavLink>
                            <NavLink className='active'>
                                <div className="nav-item">
                                    <ContactMailIcon />
                                    <p>Contacto</p>
                                </div>
                            </NavLink>
                        </ul>
                    </div>
                    
                    <div onClick={toggleMenu} className={`menu-icon ${openMenu ? 'open' : ''}`} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="logo">
                        <NavLink to="/">
                        <img src={logo} alt="logo"  />
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
