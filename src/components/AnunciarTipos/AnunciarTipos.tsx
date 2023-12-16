import React from "react";
import './AnunciarTipos.css';


export default function AnunciarTipos() {
    return(
        <div>
            <div className="anunciarText">
                Anunciar:
            </div>
            <div className="divFatherTipos">
                <div className="btnTipo">
                Eletrônico
                </div>
                <div className="btnTipo">
                Roupas
                </div>
                <div className="btnTipo">
                Automóvel
                </div>
                <div className="btnTipo">
                Móvel
                </div>
                <div className="btnTipo">
                Instrumento de Música
                </div>
                
            </div>
        </div>
    )
}