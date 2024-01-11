import React from "react";
import "./AnunciarAutomoveis.css";
import axios from "axios";
import Navbar from "../../../navbar/Navbar";


async function AutomovelDataPost(){

    var automovelMarcaInput = document.getElementById("automovelMarca")  as HTMLInputElement || null;
    var automovelModeloInput = document.getElementById("automovelModelo")  as HTMLInputElement || null;
    var automovelAnoInput = document.getElementById("automovelAno")  as HTMLInputElement || null;
    var automovelCorInput = document.getElementById("automovelCor")  as HTMLInputElement || null;
    var automovelKmInput = document.getElementById("automovelKm")  as HTMLInputElement || null;
    var automovelNumeroInput = document.getElementById("automovelNumero")  as HTMLInputElement || null;
    var automovelPrecoInput = document.getElementById("automovelPreco")  as HTMLInputElement || null;
    var automovelUrl = "http://localhost:8080/api/automoveis";

    var automovelDataJson = {

        "marca": automovelMarcaInput.value.toString(),
        "modelo": automovelModeloInput.value.toString(),
        "ano": automovelAnoInput.value.toString(),
        "cor": automovelCorInput.value.toString(),
        "km": automovelKmInput.value.toString(),
        "numero": automovelNumeroInput.value.toString(),
        "preco": automovelPrecoInput.value.toString()
    }


    await axios.post(automovelUrl, automovelDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



export default function AutomovelInput(){
    return(
        <div>
            <Navbar/>
            <div className="automovelInput">

                <div className="mainBody">

                    <div className="automovelInputBody">
                        <input type = "text" id = "automovelMarca" placeholder="Marca" className="inputs"/>
                    </div>
                    <div className="automovelInputBody">
                        <input type = "text" id = "automovelModelo" placeholder="Modelo" className="inputs"/>
                    </div>
                    <div className="automovelInputBody">
                        <input type = "text" id = "automovelAno" placeholder="Ano" className="inputs"/>
                    </div>
                    <div className="automovelInputBody">
                        <input type = "text" id = "automovelCor" placeholder="Cor" className="inputs"/>
                    </div>
                    <div className="automovelInputBody">
                        <input type = "text" id = "automovelKm" placeholder="Km Rodados" className="inputs"/>
                    </div>
                    <div className="automovelInputBody">
                        <input type = "text" id = "automovelNumero" placeholder="Número de telefone" className="inputs"/>
                    </div>
                    <div className="automovelInputBody">
                        <input type = "text" id = "automovelPreco" placeholder="Preço" className="inputs"/>
                    </div>
                    <button type = "submit" id="sendBtnPost" className="button" onClick={AutomovelDataPost}>Anunciar</button>

                </div>
            </div>
        </div>
    );
};
;