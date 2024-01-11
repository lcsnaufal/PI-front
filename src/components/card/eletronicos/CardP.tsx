import React, { useEffect } from "react";
import './CardP.css';
import GetEletronicos from '../../../services/eletronicos/eletronicosApi';



function CardP(){

    useEffect(() =>{

        var divId = document.getElementById("mainCard") as HTMLDivElement; 
        console.log("divId dentro do componente: ", divId)
        GetEletronicos.GetEletronicos(divId);

    })


    return(
        <div id="mainCard" className= "mainCard">
        </div>
    )
}

export default CardP;