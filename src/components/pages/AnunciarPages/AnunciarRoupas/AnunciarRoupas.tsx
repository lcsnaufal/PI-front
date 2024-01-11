import React from "react";
import "./AnunciarRoupas.css";
import axios from "axios";
import Navbar from "../../../navbar/Navbar";


async function RoupaDataPost(){

    var roupaMarcaInput = document.getElementById("roupaMarca")  as HTMLInputElement || null;
    var roupaTipoInput = document.getElementById("roupaTipo")  as HTMLInputElement || null;
    var roupaTamanhoInput = document.getElementById("roupaTamanho") as HTMLInputElement || null;
    var roupaCorInput = document.getElementById("roupaCor")  as HTMLInputElement || null;
    var roupaNumeroInput = document.getElementById("roupaNumero")  as HTMLInputElement || null;
    var roupaPrecoInput = document.getElementById("roupaPreco")  as HTMLInputElement || null;
    var roupaUrl = "http://localhost:8080/api/roupas";

    var roupaDataJson = {

        "marca": roupaMarcaInput.value.toString(),
        "tipo": roupaTipoInput.value.toString(),
        "tamanho": roupaTamanhoInput.value.toString(),
        "cor": roupaCorInput.value.toString(),
        "numero": roupaNumeroInput.value.toString(),
        "preco": roupaPrecoInput.value.toString()
        
    
    }


    await axios.post(roupaUrl, roupaDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



export default function RoupaInput(){
    return(
        <div>
            <Navbar/>
            <div className="roupaInput">

                <div className="mainBody">

                    <div className="roupaInputBody">
                        <input type = "text" id = "roupaMarca" placeholder="Marca" className="inputs"/>
                    </div>
                    <div className="roupaInputBody">
                        <input type = "text" id = "roupaTipo" placeholder="Tipo" className="inputs"/>
                    </div>
                    <div className="roupaInputBody">
                        <input type = "text" id = "roupaTamanho" placeholder="Tamanho" className="inputs"/>
                    </div>
                    <div className="roupaInputBody">
                        <input type = "text" id = "roupaCor" placeholder="Cor" className="inputs"/>
                    </div>
                    <div className="roupaInputBody">
                        <input type = "text" id = "roupaNumero" placeholder="Número de telefone" className="inputs"/>
                    </div>
                    <div className="roupaInputBody">
                        <input type = "text" id = "roupaPreco" placeholder="Preço" className="inputs"/>
                    </div>
                    <button type = "submit" id="sendBtnPost" className="button" onClick={RoupaDataPost}>Enviar</button>

                </div>
            </div>
        </div>
    );
};
;