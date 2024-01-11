import React, { useEffect } from "react";
import './CardP.css';
import GetRoupas from '../../../services/roupas/roupasApi';



function CardP(){

    useEffect(() =>{

        var divId = document.getElementById("mainCard") as HTMLDivElement; 
        console.log("divId dentro do componente: ", divId)
        GetRoupas.GetRoupas(divId);

    })


    return(
        <div id="mainCard" className= "mainCard">
        </div>
    )
}

export default CardP;