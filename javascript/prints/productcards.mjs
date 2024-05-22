
import { favoriteSave } from "../favorites/favoriteProduct.mjs";
import { sortedArray } from "../sortProducts.mjs";
import { products } from "../utils/product.mjs";
window.favoriteSave = favoriteSave;
const productsSelector = document.getElementById("products");




export function createCard(product) {
    return `
    
    <article class="product-card">
        <a href="./details.html?id=${product.id}">
            <img class="product-img" src="${product.image[0]}" alt="${product.name}">
        </a>
            <div class="product-info">
                <div>
                <div>
                    <a href="./details.html?id=${product.id}">
                        <span class="product-title">${product.name}</span>
                    </a>
                    <span class="product-description">${product.description}</span>
                </div>
                    <button class="btn btn-add-cart" onclick="favoriteSave('${product.id}')"><i class="fa-solid fa-heart" style="color: #ff0000;"></i></button>
                </div>
                <div class="product-price-block">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <span class="descuento">${(product.discount * 100).toFixed(0)}% offf</span>
                </div>
                <div class="product-tax-policy">Incluye IGV, solo Perú</div>
            </div>
    </article>
    `;
}
export function printCards(arrayOfProducts, idSelector) {
    var productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate += createCard(element);
    }
    idSelector = document.getElementById(idSelector);
    if (idSelector) {
        idSelector.innerHTML = productsTemplate;
    }
}
const sortProductArray = sortedArray(products);
console.log(sortProductArray)
printCards(sortProductArray, "products");