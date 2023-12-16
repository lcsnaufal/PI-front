import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AnunciarPage from "../pages/AnunciarPage";


function Navbar() {
    return(
        <div className="navbarFather">
            <Link to={'/'} className="textAndImg">
                <div>IMAGEM</div>
                <div>Mercado Usados</div>
            </Link>
            <Link to={'/anunciar'} className="textAnunciar">ANUNCIAR</Link>

        </div>
    )
}

export default Navbar;