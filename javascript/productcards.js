const productsSelector = document.getElementById("products");

function createCard(product) {
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
                    <button class="btn btn-add-cart"><i class="fa-solid fa-heart" style="color: #ff0000;"></i></button>
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
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate += createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

printCards(products, "products");