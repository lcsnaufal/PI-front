import React from "react";
import "./AnunciarInstrumentos.css";
import axios from "axios";
import Navbar from "../../../navbar/Navbar";


async function InstrumentoDataPost(){

    var instrumentoImagemInput = document.getElementById("instrumentoImagem")  as HTMLInputElement || null;
    var instrumentoMarcaInput = document.getElementById("instrumentoMarca")  as HTMLInputElement || null;
    var instrumentoTipoInput = document.getElementById("instrumentoTipo")  as HTMLInputElement || null;
    var instrumentoCorInput = document.getElementById("instrumentoCor")  as HTMLInputElement || null;
    var instrumentoNumeroInput = document.getElementById("instrumentoNumero")  as HTMLInputElement || null;
    var instrumentoPrecoInput = document.getElementById("instrumentoPreco")  as HTMLInputElement || null;
    var instrumentoUrl = "http://localhost:8080/api/instrumentos";

    var instrumentoDataJson = {

        "imagem": instrumentoImagemInput.value.toString(),
        "marca": instrumentoMarcaInput.value.toString(),
        "tipo": instrumentoTipoInput.value.toString(),
        "cor": instrumentoCorInput.value.toString(),
        "numero": instrumentoNumeroInput.value.toString(),
        "preco": instrumentoPrecoInput.value.toString()
        
    
    }


    await axios.post(instrumentoUrl, instrumentoDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



export default function InstrumentoInput(){
    return(
        <div>
            <Navbar/>
            <div className="instrumentoInput">

                <div className="mainBody">

                    <div className="instrumentoInputBody">
                        <input type = "text" id = "instrumentoImagem" placeholder="Imagem" className="inputs"/>
                    </div>
                    <div className="instrumentoInputBody">
                        <input type = "text" id = "instrumentoMarca" placeholder="Marca" className="inputs"/>
                    </div>
                    <div className="instrumentoInputBody">
                        <input type = "text" id = "instrumentoTipo" placeholder="Instrumento" className="inputs"/>
                    </div>
                    <div className="instrumentoInputBody">
                        <input type = "text" id = "instrumentoCor" placeholder="Cor" className="inputs"/>
                    </div>
                    <div className="instrumentoInputBody">
                        <input type = "text" id = "instrumentoNumero" placeholder="Número de telefone" className="inputs"/>
                    </div>
                    <div className="instrumentoInputBody">
                        <input type = "text" id = "instrumentoPreco" placeholder="Preço" className="inputs"/>
                    </div>
                    <button type = "submit" id="sendBtnPost" className="button" onClick={InstrumentoDataPost}>Enviar</button>

                </div>
            </div>
        </div>
    );
};
;