const productsSelector = document.getElementById("products");

function createCard(product) {
    return `
    <a href="./details.html">
        <article class="product-card">
            <img class="product-img" src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <span class="product-title">${product.name}</span>
                    <span class="product-description">${product.description}</span>
                    <div class="product-price-block">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <span class="descuento">${(product.discount * 100).toFixed(0)}% offf</span>
                    </div>
                    <div class="product-tax-policy">Incluye IGV, solo Perú</div>
                </div>
        </article>
    </a>
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