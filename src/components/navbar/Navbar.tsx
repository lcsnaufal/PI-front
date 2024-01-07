import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return(
        <div className="navbarFather">
            <Link to={'/Home'} className="textAndImg">
                <div>IMAGEM</div>
                <div>Mercado Usados</div>
            </Link>
            <Link to={'/Anunciar'} className="textAnunciar">ANUNCIAR</Link>

        </div>
    )
}

export default Navbar;