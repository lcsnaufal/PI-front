import React, { useEffect } from "react";
import './CardP.css';
import GetAutomoveis from '../../../services/automoveis/automoveisApi';



function CardP(){

    useEffect(() =>{

        var divId = document.getElementById("mainCard") as HTMLDivElement; 
        console.log("divId dentro do componente: ", divId)
        GetAutomoveis.GetAutomoveis(divId);

    })


    return(
        <div id="mainCard" className= "mainCard">
        </div>
    )
}

export default CardP;