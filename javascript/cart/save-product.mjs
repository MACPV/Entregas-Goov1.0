

import { products } from "../utils/product.mjs";


export function saveProduct(id) {
    const found = products.find((each) => each.id === id);
    if (!found) {
        console.error(`No se encontró ningún producto con el ID ${id}`);
        return; // Salir de la función si no se encontró el producto
    }
    let existArray = JSON.parse(localStorage.getItem('cart')) || [];
    const colorInput = document.querySelector(`#color-${id}`);
    const quantityInput = document.querySelector(`#quantity-${id}`);
    const product = {
        id: id,
        name: found.name,
        price: found.price,
        image: found.image[0],
        color: colorInput.value,
        quantity: parseInt(quantityInput.value, 10),
    };

    const index = existArray.findIndex((item) => item.id === id);
    if (index !== -1) {
        // Si el producto ya existe, actualizar sus propiedades
        existArray[index] = product;
    } else {
        // Si el producto no existe, agregarlo al arreglo
        existArray.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(existArray));
    console.log('Carrito actualizado:', existArray);
}