import React from "react";
import './AnunciarTipos.css';
import { Link } from "react-router-dom";


export default function AnunciarTipos() {
    return(
        <div>
            <div className="anunciarText">
                Anunciar:
            </div>
            <div className="divFatherTipos">
                <Link to={"Eletronico"} className="link">
                    <div className="btnTipo">
                    Eletrônico
                    </div>
                </Link>
                <Link to={"Roupa"} className="link">
                    <div className="btnTipo">
                    Roupas
                    </div>
                </Link>
                <Link to={"Automovel"} className="link">
                    <div className="btnTipo">
                    Automóvel
                    </div>
                </Link>
                <Link to={"Movel"} className="link">
                    <div className="btnTipo">
                    Móvel
                    </div>
                </Link>
                <Link to={"Instrumento"} className="link">
                    <div className="btnTipo">
                    Instrumento de Música
                    </div>
                </Link>
                
            </div>
        </div>
    )
}