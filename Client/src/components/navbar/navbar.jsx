import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../imagenes/logo.png'; 
import "./navbar.css"

export function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
        document.body.classList.toggle('open', !openMenu);
    };

    const closeMenu = () => {
        setOpenMenu(false);
        setIsSubmenuOpen(false);
        document.body.classList.remove('open');
    };

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <nav>
            <div className={`overlay ${openMenu ? 'open' : ''}`} onClick={closeMenu}></div>
            <div className="container-navbar">
                <div className="navbar">
                    <div className={`menu ${openMenu ? 'open' : ''}`}>
                        <ul>
                            <li onClick={closeMenu}>
                                <div className="nav-item">
                                    <HomeIcon />
                                    <a className='active' href='#inicio'>Inicio</a>
                                </div>
                            </li>
                            <li onClick={closeMenu}>
                                <div className="nav-item">
                                    <BusinessIcon />
                                    <a href='#areas' className='active'>Áreas</a>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item" onClick={toggleSubmenu}>
                                    <InfoIcon />
                                    <a className='active'>¿Quiénes Somos?</a>
                                    <div className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                                        <NavLink to="/dueños/sabrina" className="submenu-item" onClick={closeMenu}>Sabrina Ramos</NavLink>
                                        <NavLink to="/dueños/rodrigo" className="submenu-item" onClick={closeMenu}>Rodrigo Feijoo</NavLink>
                                        <NavLink to="/dueños/daian" className="submenu-item" onClick={closeMenu}>Daian Rodríguez</NavLink>
                                    </div>
                                </div>
                            </li>
                            <li onClick={closeMenu}>
                                <div className="nav-item">
                                    <GroupIcon />
                                    <a href='#equipo' className='active'>Equipo</a>
                                </div>
                            </li>
                            <li onClick={closeMenu}>
                                <div className="nav-item">
                                    <LocationOnIcon />
                                    <a href='#ubicacion' className='active'>Ubicación</a>
                                </div>
                            </li>
                            <li onClick={closeMenu}>
                                <div className="nav-item">
                                    <ContactMailIcon />
                                    <a href='#contacto' className='active'>Contacto</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div onClick={toggleMenu} className={`menu-icon ${openMenu ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="logo">
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}