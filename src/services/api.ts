import React from "react";
import axios from "axios";

async function GetSalesperson(divId: HTMLDivElement){
    const salesPersonUrl = "http://localhost:8080/api/vendedor";

    await axios.get(salesPersonUrl)
    .then((response) =>{
        const dataSalesperson: Record<string, {name: string, lastName: string,
        phoneNumber: string,
        cpf: string,
        email: string,
        address: string}> = response.data;

        const dataSalespersonArray = Object.entries(dataSalesperson).map(
            ([key, value]) => ({
                key,
                ...value
            }));

            var content: "";

            dataSalespersonArray.forEach((dados) => {

                content += `
                        <div class="cards">
                            <div class="cardImg">
                                <img src = ${dados.name} alt = "" class = "cardImage"></img>        
                            </div>
                            <div class="cardTitle">
                                ${dados.lastName}        
                            </div>
                            <div class="cardSubTitle">
                                ${dados.phoneNumber}        
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


async function PostSalesperson(){

}


export default { GetSalesperson, PostSalesperson };