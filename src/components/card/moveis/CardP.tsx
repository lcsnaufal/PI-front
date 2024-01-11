import React, { useEffect } from "react";
import './CardP.css';
import GetMoveis from '../../../services/moveis/moveisApi';



function CardP(){

    useEffect(() =>{

        var divId = document.getElementById("mainCard") as HTMLDivElement; 
        console.log("divId dentro do componente: ", divId)
        GetMoveis.GetMoveis(divId);

    })


    return(
        <div id="mainCard" className= "mainCard">
        </div>
    )
}

export default CardP;