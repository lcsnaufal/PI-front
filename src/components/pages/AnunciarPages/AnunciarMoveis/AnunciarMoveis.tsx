import React from "react";
import "./AnunciarMoveis.css";
import axios from "axios";
import Navbar from "../../../navbar/Navbar";


async function MovelDataPost(){

    var movelImagemInput = document.getElementById("movelImagem")  as HTMLInputElement || null;
    var movelNomeInput = document.getElementById("movelNome")  as HTMLInputElement || null;
    var movelTamanhoInput = document.getElementById("movelTamanho")  as HTMLInputElement || null;
    var movelCorInput = document.getElementById("movelCor")  as HTMLInputElement || null;
    var movelNumeroInput = document.getElementById("movelNumero")  as HTMLInputElement || null;
    var movelPrecoInput = document.getElementById("movelPreco")  as HTMLInputElement || null;
    var movelUrl = "http://localhost:8080/api/moveis";

    var movelDataJson = {

        "imagem": movelImagemInput.value.toString(),
        "movel": movelNomeInput.value.toString(),
        "tamanho": movelTamanhoInput.value.toString(),
        "cor": movelCorInput.value.toString(),
        "numero": movelNumeroInput.value.toString(),
        "preco": movelPrecoInput.value.toString()
        
    
    }


    await axios.post(movelUrl, movelDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



export default function MovelInput(){
    return(
        <div>
            <Navbar/>
            <div className="movelInput">

                <div className="mainBody">

                    <div className="movelInputBody">
                        <input type = "text" id = "movelImagem" placeholder="Imagem" className="inputs"/>
                    </div>
                    <div className="movelInputBody">
                        <input type = "text" id = "movelNome" placeholder="Móvel" className="inputs"/>
                    </div>
                    <div className="movelInputBody">
                        <input type = "text" id = "movelTamanho" placeholder="Tamanho" className="inputs"/>
                    </div>
                    <div className="movelInputBody">
                        <input type = "text" id = "movelCor" placeholder="Cor" className="inputs"/>
                    </div>
                    <div className="movelInputBody">
                        <input type = "text" id = "movelNumero" placeholder="Número de telefone" className="inputs"/>
                    </div>
                    <div className="movelInputBody">
                        <input type = "text" id = "movelPreco" placeholder="Preço" className="inputs"/>
                    </div>
                    <button type = "submit" id="sendBtnPost" className="button" onClick={MovelDataPost}>Enviar</button>

                </div>
            </div>
        </div>
    );
};
;