

const searchSelector = document.querySelector("#search");

searchSelector?.addEventListener("keyup", event => captureText(event));

function captureText(){
    console.log("Capturado");
}

function captureText(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    printCards(filteredProducts, "products");
}

