import React, { useEffect } from "react";
import './CardP.css';
import GetInstrumentos from '../../../services/instrumentos/instrumentosApi';



function CardP(){

    useEffect(() =>{

        var divId = document.getElementById("mainCard") as HTMLDivElement; 
        console.log("divId dentro do componente: ", divId)
        GetInstrumentos.GetInstrumentos(divId);

    })


    return(
        <div id="mainCard" className= "mainCard">
        </div>
    )
}

export default CardP;