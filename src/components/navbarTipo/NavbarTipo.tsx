import React from "react";
import { Link } from "react-router-dom";
import "./NavbarTipo.css";
import phone from "../../img/mobilePhone.png";
import instrument from "../../img/guitar.png";
import car from "../../img/car.png";
import shirt from "../../img/shirt.png";
import furniture from "../../img/couch.png";

 
function NavbarTipo() {
    return(
        <div className="divFather">
            <Link to={"/Eletronicos"}  className="divChild">
                <img src={phone} alt="" className="img"/>
                <div className="text">Eletrônicos</div>
            </Link>
            <Link to={"/Automoveis"} className="divChild">
                <img src={car} alt="" className="img"/>
                <div className="text">Automóveis</div>
            </Link>
            <Link to={"/Roupas"} className="divChild">
                <img src={shirt} alt="" className="img"/>
                <div className="text">Roupas</div>
            </Link>
            <Link to={"/Moveis"} className="divChild">
                <img src={furniture} alt="" className="img"/>
                <div className="text">Móveis</div>
            </Link>
            <Link to={"/Instrumentos"} className="divChild">
                <img src={instrument} alt="" className="img"/>
                <div className="text">Instrumentos Musicais</div>
            </Link>
        </div>
    )
}

export default NavbarTipo;