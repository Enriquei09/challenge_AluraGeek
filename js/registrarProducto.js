import { conexionApi } from "./conexionApi.js";
const form = document.querySelector("[data-form]");
const btnClean = document.querySelector("#Bclean");

async function creaProduct(evento){
    evento.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const urlImage = document.querySelector("[data-urlImage]").value;

    await conexionApi.addProduct(name,price,urlImage);
    window.location.href="./challengeAluraGeek.html";
}

async function inputsClean(){
    document.querySelector("[data-name]").value="";
    document.querySelector("[data-price]").value="";
    document.querySelector("[data-urlImage]").value="";
}

form.addEventListener("submit", evento => creaProduct(evento));
btnClean.addEventListener("click",inputsClean);