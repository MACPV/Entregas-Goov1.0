
import { products } from "../utils/product.mjs";

export function printImages(id) {
    const product = products.find(product => product.id == id);
    const imagesTemplate = `
    <div class="product-images-block">
        ${product.image.map((each, index) => `<img id="img-${index}" class="images" src="${each}" alt="${each}" onclick="changeMainImage('img-${index}') "/>`).join("")}
        <img src="/assets/1.png" id="main-image" alt="main-image">
    </div>
    `;
    const imagesSelector = document.querySelector('.imagenes');
    imagesSelector.innerHTML = imagesTemplate;
    console.log(product);
    console.log(id);
}