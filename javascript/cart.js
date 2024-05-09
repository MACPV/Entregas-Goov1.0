const idSelector = document.getElementById("products");
const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

function printCartProducts(cartProductsArray) {
    if (!cartProductsArray.length) {
        console.log("No products found in cart.");
        return; // Exit the function if no products
    }
    let productsTemplate = '';
    cartProductsArray.forEach(product => {
        productsTemplate += `
        
        <div class="cart-product">
            <div class="product-images-cart">
                <img id="img-${product.id}" src="./${product.image}" alt="img-${product.id}" class="images">
            </div>

            <div class="product-info-cart">
                <h3 id="name-${product.id}">${product.name}</h3>
                <p id="color-${product.id}">${product.color}</p>
                <p id="quantity-${product.id}">${product.quantity}</p>
            </div>
            <div>
                <h3 id="price-${product.id}">$${product.price.toFixed(2)}</h3>
            </div>
            
        </div>
        `;
    });

    const productsSelector = document.getElementById("cart-products-details");
    productsSelector.innerHTML = productsTemplate;
}


printCartProducts(cartProducts);
