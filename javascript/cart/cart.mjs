import { changeQuantity, updatePriceCart } from "./changePriceTotal.mjs";
window.changeQuantity = changeQuantity;
window.updatePriceCart = updatePriceCart;
const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartProducts);
function printCartProducts(cartProductsArray) {
    if (!cartProductsArray.length) {
        console.log("No products found in cart.");
        return; // Exit the function if no products
    }
    let productsCartTemplate = '';
    cartProductsArray.forEach(product => {
        productsCartTemplate += `
        <div class="cart-product">
            <div class="product-images-cart">
                <img id="img-${product.id}" src="./${product.image}" alt="img-${product.id}" class="images">
            </div>

            <div class="product-info-cart">
                <h3 id="name-${product.id}">${product.name}</h3>
                <p id="color-${product.id}">${product.color}</p>
                <input id="quantity-${product.id}" type="number" min="1" max="10" onchange="changeQuantity(${product.id}, this.value); updatePriceCart(${product.id})" value="${product.quantity}">
            </div>
            <div>
                <h3 id="price-${product.id}">$${product.price.toFixed(2)}</h3>
            </div>
            
        </div>
        `;
    });

    const productsSelectorcart = document.getElementById("cart-products-details");
    productsSelectorcart.innerHTML = productsCartTemplate;
    
}


printCartProducts(cartProducts);
