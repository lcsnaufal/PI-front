import React from "react";
import axios from "axios";
import couch from "../../img/couchIcon.png";
import color from "../../img/color.png";
import tamanho from "../../img/largura.png";
import phone from "../../img/smartphone.png";
import dolar from "../../img/dolar.png";





async function GetMoveis(divId: HTMLDivElement){
    const moveisUrl = "http://localhost:8080/api/moveis";

    
    await axios.get(moveisUrl)
    .then((response) =>{
        const dataMoveis: Record<string, {movel: string, tamanho: string,
        cor: string,
        numero: string,
        preco: string,}> = response.data;

        const dataMoveisArray = Object.entries(dataMoveis).map(
            ([key, value]) => ({
                key,
                ...value
            }));

            var content: "";

            dataMoveisArray.forEach((dados) => {

                content += `
                        <div class="card">
                            <div class="cardTitle">
                                <img alt = "" src = ${couch} height = 30px></img>
                                ${dados.movel}        
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



export default { GetMoveis };