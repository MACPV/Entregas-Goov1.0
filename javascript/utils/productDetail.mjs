
import { changeSubtotal, printCheckouts } from "../prints/print-Checkouts.mjs";
import { printImages } from "../prints/print-Images.mjs";
import { printDetails } from "../prints/print-details.mjs";
import { changeMainImage } from "./changeMainIMG.mjs";
import { products } from "./product.mjs";
window.changeMainImage = changeMainImage;
window.changeSubtotal = changeSubtotal;

const query = location.search;
const params = new URLSearchParams(query);
const id = +params.get('id');
console.log(query);
console.log(params);
console.log(`id1: ${id}`);
console.log(products);






printImages(id);
printDetails(id);
printCheckouts(id);
saveProduct(id);
console.log(`id2: ${id}`);
changeMainImage(`img-${0}`);

