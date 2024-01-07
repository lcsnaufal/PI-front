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
                <Link to={"Eletronico"}>
                    <div className="btnTipo">
                    Eletrônico
                    </div>
                </Link>
                <Link to={"Roupa"}>
                    <div className="btnTipo">
                    Roupas
                    </div>
                </Link>
                <Link to={"Automovel"}>
                    <div className="btnTipo">
                    Automóvel
                    </div>
                </Link>
                <Link to={"Movel"}>
                    <div className="btnTipo">
                    Móvel
                    </div>
                </Link>
                <Link to={"Instrumento"}>
                    <div className="btnTipo">
                    Instrumento de Música
                    </div>
                </Link>
                
            </div>
        </div>
    )
}