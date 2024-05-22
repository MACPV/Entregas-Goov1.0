import { products } from "../utils/product.mjs";

export function favoriteSave(id) {
    const found = products.find((each) => each.id === +id);
    if (!found) {
        console.log(id);
        console.error(`No se encontró el producto con el ID ${id}`);
        return;
    }
    const existArray = JSON.parse(localStorage.getItem('favorite')) || [];
    const index = existArray.findIndex((item) => item.id == id);
    if (index != -1) {
        existArray[index] = found;
    } else {
        existArray.push(found);
    }
    localStorage.setItem('favorite', JSON.stringify(existArray));
    console.log('Carrito actualizado:', existArray);
}