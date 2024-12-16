async function listarProductos(){

    const conexion = await fetch("http://localhost:3000/productos");

    const conxexionConvertida = conexion.json();

    //console.log(conxexionConvertida);
    return conxexionConvertida;
}

async function addProduct(name,price,urlImage){

    const ultimoId = await obtenerUltimoId(); // Obtener el último ID registrado
    const nuevoId = ultimoId + 1; // Calcular el nuevo ID

    const conexion = await fetch("http://localhost:3000/productos",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            id: nuevoId.toString(),
            name:name,
            price:price,
            urlImage:urlImage
        })
    })

    const conxexionConvertida = conexion.json();
    return conxexionConvertida
}

async function obtenerUltimoId() {
    const productos = await listarProductos();
    if (productos.length === 0) return 0; // Si no hay productos, el primer ID será 1
    return Math.max(...productos.map(producto => parseInt(producto.id))); // Encuentra el mayor ID
}

export const conexionApi={
    listarProductos,addProduct,obtenerUltimoId
}

//listarProductos();