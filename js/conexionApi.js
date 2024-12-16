async function listarProductos(){

    const conexion = await fetch("http://localhost:3000/productos");

    const conxexionConvertida = conexion.json();

    //console.log(conxexionConvertida);
    return conxexionConvertida;
}

export const conexionApi={
    listarProductos
}

//listarProductos();