import { conexionApi } from "./conexionApi.js";

document.addEventListener("click", async (event) => {
    const deleteButton = event.target.closest(".delete-button");
    if (deleteButton) {
        const id = deleteButton.getAttribute("data-id");
        try {
            await conexionApi.eliminarProducto(id);
            console.log(`Producto con ID ${id} eliminado`);
            // Eliminar la tarjeta del DOM
            deleteButton.closest("li").remove();
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            alert("No se pudo eliminar el producto. Intenta de nuevo.");
        }
    }
});