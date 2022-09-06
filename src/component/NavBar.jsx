import React from 'react';
import { NavLink }  from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
                    <div className="container">
                        <NavLink id="logoNavBar" className="navbar-brand fw-bold fs-4" to="/">SINOC | Data market</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/productos">Productos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/acerca-de-nosotros">Nuestro equipo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contactanos">Contáctanos</NavLink>
                                </li>
                            </ul>

                            <div className="buttons">
                                <NavLink to="/login" className="bt-loginNavBar">
                                    Iniciar sesión
                                </NavLink>
                                <NavLink to="/registro" className="btn-registerNavBar ms-2">
                                    Registrarse
                                </NavLink>
                                <NavLink to="/cart" className="btn-cartShopNavBar ms-2">
                                    Carrito <i className="fa fa-shopping-cart me-1"></i> (0)
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar;