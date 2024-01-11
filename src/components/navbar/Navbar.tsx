import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import store from "../../img/store.png";



function Navbar() {
    return(
        <div className="navbarFather">
            <Link to={'/Home'} className="textAndImg">
                <img alt='' src={store} height={40}></img>
                <div className="text">Mercado Usados</div>
            </Link>
            <Link to={'/Anunciar'} className="textAnunciar">ANUNCIAR</Link>

        </div>
    )
}

export default Navbar;