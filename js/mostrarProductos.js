import { conexionApi } from "./conexionApi.js";
const lista = document.querySelector("[data-lista]");

function createCard(){

    const producto = document.createElement("li");
    producto.className = "prducts__card";
    producto.innerHTML= `
    <li class="prducts__card" >
        <img  src="/assets/game_boy.png" alt="">                        
        <span>Game Boy Classic</span>
        <div class="prducts__card--element">
                            
            <p>$ 60,00</p>
            <img src="/assets/icon_trash2_.png" alt="icono de basurero">
    
        </div>
                        
    </li>`;

    return producto;
}

async function listarProductos() {
    const listaApi = conexionApi.listarProductos();
} 