import React from "react";
import axios from "axios";
import color from "../../img/color.png";
import phone from "../../img/smartphone.png";
import dolar from "../../img/dolar.png";
import screen from "../../img/screen.png";
import storage from "../../img/cartao-de-memoria.png";
import brand from "../../img/registrado.png";
import modelo from "../../img/foldable-phone.png";



async function GetEletronicos(divId: HTMLDivElement){
    const eletronicosUrl = "http://localhost:8080/api/eletronicos";

    
    await axios.get(eletronicosUrl)
    .then((response) =>{
        const dataEletronicos: Record<string, {marca: string, modelo: string,
        cor: string,
        armazenamento: string,
        tela: string
        numero: string,
        preco: string}> = response.data;

        const dataEletronicosArray = Object.entries(dataEletronicos).map(
            ([key, value]) => ({
                key,
                ...value
            }));

            var content: "";

            dataEletronicosArray.forEach((dados) => {

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
                                <img alt = "" src = ${color} height = 30px></img>
                                ${dados.cor}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${storage} height = 30px></img>
                                ${dados.armazenamento}        
                            </div>
                            <div class="cardTitle">
                                <img alt = "" src = ${screen} height = 30px></img>
                                <div>${dados.tela}</div>        
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



export default { GetEletronicos };