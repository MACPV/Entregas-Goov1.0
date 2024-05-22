
const favoriteArray = JSON.parse(localStorage.getItem('favorite'))  || [];
console.log(favoriteArray);

function printFavoriteProducts(favoriteArraytoPrint) {

    let productFavoriteTemplate = '';
    favoriteArraytoPrint.forEach(product => {

        productFavoriteTemplate += `
        
        <div class="favorite-product">
        <img src="${product.image[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="precio">$${product.price.toFixed(2)}</p>
            <p>Color: ${product.color}</p>
            </div>`


    });

    const favoriteSelector = document.getElementById("favorite-products-details");
    favoriteSelector.innerHTML = productFavoriteTemplate;
}

printFavoriteProducts(favoriteArray);