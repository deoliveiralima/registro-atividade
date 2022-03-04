import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {

    return(
        <nav className="nav flex-column">
            <Link to="/" className="nav-link" > Inicio </Link>
            <Link to="/categoria-atividade/lista" className="nav-link" > Categorias </Link>
            

        </nav>
    )
}


export default Sidebar; 