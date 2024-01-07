import React from "react";
import "./AnunciarEletronicos.css";
import axios from "axios";
import Navbar from "../../../navbar/Navbar";


async function EletronicoDataPost(){

    var eletronicoImagemInput = document.getElementById("eletronicoImagem")  as HTMLInputElement || null;
    var eletronicoMarcaInput = document.getElementById("eletronicoMarca")  as HTMLInputElement || null;
    var eletronicoModeloInput = document.getElementById("eletronicoModelo")  as HTMLInputElement || null;
    var eletronicoCorInput = document.getElementById("eletronicoCor")  as HTMLInputElement || null;
    var eletronicoArmazenamentoInput = document.getElementById("eletronicoArmazenamento")  as HTMLInputElement || null;
    var eletronicoTelaInput = document.getElementById("eletronicoTela")  as HTMLInputElement || null;
    var eletronicoNumeroInput = document.getElementById("eletronicoNumero")  as HTMLInputElement || null;
    var eletronicoPrecoInput = document.getElementById("eletronicoPreco")  as HTMLInputElement || null;
    var eletronicoUrl = "http://localhost:8080/api/eletronicos";

    var eletronicoDataJson = {

        "imagem": eletronicoImagemInput.value.toString(),
        "marca": eletronicoMarcaInput.value.toString(),
        "modelo": eletronicoModeloInput.value.toString(),
        "cor": eletronicoCorInput.value.toString(),
        "armazenamento": eletronicoArmazenamentoInput.value.toString(),
        "tela": eletronicoTelaInput.value.toString(),
        "numero": eletronicoNumeroInput.value.toString(),
        "preco": eletronicoPrecoInput.value.toString()
        
    
    }


    await axios.post(eletronicoUrl, eletronicoDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



export default function EletronicoInput(){
    return(
        <div>
            <Navbar/>
            <div className="eletronicoInput">

                <div className="mainBody">

                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoImagem" placeholder="Imagem" className="inputs"/>
                    </div>
                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoMarca" placeholder="Marca" className="inputs"/>
                    </div>
                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoModelo" placeholder="Modelo" className="inputs"/>
                    </div>
                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoCor" placeholder="Cor" className="inputs"/>
                    </div>
                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoArmazenamento" placeholder="Armazenamento" className="inputs"/>
                    </div>
                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoTela" placeholder="Polegadas da Tela" className="inputs"/>
                    </div>
                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoNumero" placeholder="Número de Telefone" className="inputs"/>
                    </div>
                    <div className="eletronicoInputBody">
                        <input type = "text" id = "eletronicoPreco" placeholder="Preço" className="inputs"/>
                    </div>
                    <button type = "submit" id="sendBtnPost" className="button" onClick={EletronicoDataPost}>Enviar</button>

                </div>
            </div>
        </div>
    );
};
;