import React from "react";
import axios from "axios";
import color from "../../img/color.png";
import phone from "../../img/smartphone.png";
import dolar from "../../img/dolar.png";
import brand from "../../img/registrado.png";
import instrumento from "../../img/guitar.png";







async function GetInstrumentos(divId: HTMLDivElement){
    const instrumentosUrl = "http://localhost:8080/api/instrumentos";

    
    await axios.get(instrumentosUrl)
    .then((response) =>{
        const dataInstrumentos: Record<string, {marca: string, tipo: string,
        cor: string,
        numero: string,
        preco: string}> = response.data;

        const dataInstrumentosArray = Object.entries(dataInstrumentos).map(
            ([key, value]) => ({
                key,
                ...value
            }));

            var content: "";

            dataInstrumentosArray.forEach((dados) => {

                content += `
                        <div class="card">
                            <div class="cardTitle">
                                <img alt = "" src = ${brand} height = 30px></img>
                                ${dados.marca}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${instrumento} height = 30px></img>
                                ${dados.tipo}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${color} height = 30px></img>
                                ${dados.cor}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${phone} height = 30px></img>
                                ${dados.numero}        
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



export default { GetInstrumentos };