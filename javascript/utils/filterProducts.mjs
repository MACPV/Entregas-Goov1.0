import { printCards } from "../prints/productcards.mjs";
import { sortedArray } from "../sortProducts.mjs";
import { products } from "./product.mjs";
const searchSelector = document.querySelector("#search");




export function captureText(event) {
    const arraySort = sortedArray(products);
    const searchText = event.target.value.toLowerCase();
    const filteredProducts = arraySort.filter(product => product.name.toLowerCase().includes(searchText));
    printCards(filteredProducts, "products");
}
    
searchSelector?.addEventListener("keyup", event => captureText(event));