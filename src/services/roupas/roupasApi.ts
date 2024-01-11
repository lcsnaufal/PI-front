import React from "react";
import axios from "axios";
import color from "../../img/color.png";
import phone from "../../img/smartphone.png";
import dolar from "../../img/dolar.png";
import brand from "../../img/registrado.png";
import tamanho from "../../img/camiseta.png";
import tipo from "../../img/camisa-polo.png";



async function GetRoupas(divId: HTMLDivElement){
    const roupasUrl = "http://localhost:8080/api/roupas";

    
    await axios.get(roupasUrl)
    .then((response) =>{
        const dataRoupas: Record<string, {marca: string, tipo: string,
        tamanho: string,
        cor: string,
        numero: string,
        preco: string,}> = response.data;

        const dataRoupasArray = Object.entries(dataRoupas).map(
            ([key, value]) => ({
                key,
                ...value
            }));

            var content: "";

           dataRoupasArray.forEach((dados) => {

                content += `
                        <div class="card">
                            <div class="cardTitle">
                                <img alt = "" src = ${brand} height = 30px></img>
                                ${dados.marca}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${tipo} height = 30px></img>
                                ${dados.tipo}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${tamanho} height = 30px></img>
                                ${dados.tamanho}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${color} height = 30px></img>
                                ${dados.cor}        
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



export default { GetRoupas };