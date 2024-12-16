async function listarProductos(){

    const conexion = await fetch("http://localhost:3000/productos");

    const conxexionConvertida = conexion.json();

    //console.log(conxexionConvertida);
    return conxexionConvertida;
}

async function addProduct(name,price,urlImage){
    const conexion = await fetch("http://localhost:3000/productos",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:name,
            price:price,
            urlImage:urlImage
        })
    })

    const conxexionConvertida = conexion.json();
    return conxexionConvertida
}

export const conexionApi={
    listarProductos,addProduct
}

//listarProductos();