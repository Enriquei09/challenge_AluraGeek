import { conexionApi } from "./conexionApi.js";
const form = document.querySelector("[data-form]");

async function creaProduct(evento){
    evento.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const urlImage = document.querySelector("[data-urlImage]").value;

    await conexionApi.addProduct(name,price,urlImage);
    window.location.href="./challengeAluraGeek.html";
}

form.addEventListener("submit", evento => creaProduct(evento));