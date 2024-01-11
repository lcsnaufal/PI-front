import React from "react";
import axios from "axios";
import color from "../../img/color.png";
import phone from "../../img/smartphone.png";
import dolar from "../../img/dolar.png";
import brand from "../../img/registrado.png";
import km from "../../img/marca-conversivel.png";
import modelo from "../../img/car.png"
import ano from "../../img/calendar.png";






async function GetAutomoveis(divId: HTMLDivElement){
    const automoveisUrl = "http://localhost:8080/api/automoveis";

    
    await axios.get(automoveisUrl)
    .then((response) =>{
        const dataAutomoveis: Record<string, {marca: string, modelo: string,
        ano: string,
        cor: string,
        km: string
        numero: string,
        preco: string}> = response.data;

        const dataAutomoveisArray = Object.entries(dataAutomoveis).map(
            ([key, value]) => ({
                key,
                ...value
            }));

            var content: "";

            dataAutomoveisArray.forEach((dados) => {

                content += `
                        <div class="card">
                            <div class="cardTitle">
                                <img alt = "" src = ${brand} height = 30px></img>
                                ${dados.marca}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${modelo} height = 30px></img>
                                ${dados.modelo}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${ano} height = 30px></img>
                                ${dados.ano}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${color} height = 30px></img>
                                ${dados.cor}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${km} height = 30px></img>
                                <div>${dados.km}</div>        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${phone} height = 30px></img>
                                <div>${dados.numero}</div>        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${dolar} height = 30px></img>
                                <div>${dados.preco}</div>        
                            </div>
                        </div>
                `;

                divId.innerHTML = content;


            }   
        )


    })

    .catch((error) => {
        console.log("O erro ocorrido foi: ", error);
    })


}



export default { GetAutomoveis };