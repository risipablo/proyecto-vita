import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../imagenes/logo.png';
import './navbar.css';

export function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const closeMenu = () => {
        setOpenMenu(false);
        setIsSubmenuOpen(false);
    };

    const toggleSubmenu = () => {
        if (window.innerWidth < 1050) {
            setIsSubmenuOpen(!isSubmenuOpen);
        }
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
                                    <NavLink exact to="/" activeClassName="active" className="nav-link">
                                        Inicio
                                    </NavLink>
                                </div>
                            </li>

                            <li onClick={toggleSubmenu} className="has-submenu">
                                <div className="nav-item">
                                    <InfoIcon />
                                    <NavLink to="#quienes" activeClassName="active">
                                        ¿Quiénes Somos?
                                    </NavLink>
                                </div>
                                <div className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                                    <NavLink to="/dueños/1" className="submenu-item" onClick={closeMenu}>
                                       <p> Sabrina Ramos </p> 
                                    </NavLink>
                                    <NavLink to="/dueños/2" className="submenu-item" onClick={closeMenu}>
                                        <p> Rodrigo Feijoo </p>
                                    </NavLink>
                                    <NavLink to="/dueños/3" className="submenu-item" onClick={closeMenu}>
                                        <p> Daian Rodríguez </p>
                                    </NavLink>
                                </div>
                            </li>
                            
                            <li onClick={closeMenu} >
                                <div className="nav-item">
                                    <GroupIcon />
                                    <NavLink  exact to="/personal" activeClassName="active" className="nav-link"  >
                                        Equipo
                                    </NavLink>
                                </div>
                            </li>

                            <li onClick={closeMenu}>
                                <div className="nav-item">
                                    <ContactMailIcon />
                                    <NavLink exact to="/contacto"  activeClassName="active" className="nav-link">
                                        Contacto
                                    </NavLink>
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



                            {/* <li onClick={closeMenu}>
                                <div className="nav-item">
                                    <LocationOnIcon />
                                    <NavLink exact to="#ubicacion"  activeClassName="active" >
                                        Ubicación
                                    </NavLink>
                                </div>
                            </li> */}

                                                        {/* <li onClick={closeMenu}>
                                <div className="nav-item" >
                                    <BusinessIcon />
                                    <NavLink exact   activeClassName="active" >
                                        Áreas
                                    </NavLink>
                                </div>
                            </li> */}