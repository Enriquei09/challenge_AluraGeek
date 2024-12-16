import { conexionApi } from "./conexionApi.js";
const lista = document.querySelector("[data-lista]");

function createCard(name,price,urlImage){

    const producto = document.createElement("li");
    producto.className = "prducts__card";
    producto.innerHTML= `
    <img class="prducts__card--img" src="${urlImage}" alt="">                        
        <span>${name}</span>
        <div class="prducts__card--element">
                            
            <p>$ ${price}</p>
            <a><img src="/assets/icon_trash2_.png" alt="icono de basurero"></a>
    
        </div>`;

    return producto;
}

async function listarProductos() {
    try {
        const listaApi = await conexionApi.listarProductos();

        listaApi.forEach(producto => lista.appendChild(createCard(producto.name, producto.price,producto.urlImage)));
    } catch (error) {
        lista.innerHTML= '<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>'
    }
} 

listarProductos();