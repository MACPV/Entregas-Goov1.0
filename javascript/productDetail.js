const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(query);
console.log(params);
console.log(id);
console.log(products);
function printImages(id) {
    const product = products.find(product => product.id == id);
    const imagesTemplate = `
    <div class="product-images-block">
        ${product.image.map((each, index) => `<img id="img-${index}" class="images" src="${each}" alt="${each}" onclick="changeMainImage('img-${index}') "/>`).join("")}
        <img src="${product.image[0]}" id="main-image" alt="main-image">
    </div>
    `;
    const imagesSelector = document.querySelector('.imagenes');
    imagesSelector.innerHTML = imagesTemplate;
}
function changeMainImage(id) {
    const mainImage = document.getElementById("main-image");
    const clickedImage = document.getElementById(id);

    mainImage.src = clickedImage.src;
    mainImage.alt = clickedImage.alt;

}
function printDetails(id) {
    const product = products.find(product => product.id == id);
    const detailsTemplate = `
    <div class="product-description-block">
        <h1 class="title">${product.name}</h1>
        <form class="selector">
            <fieldset>
                <label class="label" for="color">Color Disponible </label>
                <select type="text" placeholder="Selecciona un color">
                    ${product.color.map((each) => `<option value="${each}">${each}</option>`).join("")}
                </select>
            </fieldset>
        </form>
        <span>Descripción</span>
        <ul>
            <li>Compatible con dispositivos iPhone y Android</li>
            <li>Frecuencia: 2.402GHz-2.480GHz</li>
            <li>Alcance: 10-15 metros (según dispositivos)</li>
            <li>Distancia de transmisión del micrófono: 1 metro.</li>
            <li>Batería de iones de litio: 3.7 V/ 500 mA</li>
            <li>Tiempo de reproducción: 96 horas continuas</li>
            <li>Voltaje de carga: 5V</li>
            <li>Tiempo de espera: 240 horas</li>
            <li>Tiempo de carga: 1 Hora</li>
        </ul>
        </div>

        `;
    const detailsSelector = document.querySelector('.details');
    detailsSelector.innerHTML = detailsTemplate;
}

function printCheckouts(id) {
    const product = products.find(product => product.id == id);
    const detailsTemplate = `

            <span class="checkout-total-label">Precio unitario</span>
            <h2 class="checkout-total-price" id="unit-price">$${product.price}</h2>
            <p class="checkout-description"> Aceptamos Todas las Tarjetas de credito y debito </p>
            <ul class="checkout-policy-list">
                <li>
                    <span class="policy-icon"><i class="fa-solid fa-truck fa-lg"></i></span>
                    <span class="policy-desc">Entrega a domicilio en todo Chiclayo envío</span>
                </li>
                <li>
                    <span class="policy-icon"><i class="fa-solid fa-handshake fa-lg"></i></span>
                    <span class="policy-desc">Pago contra entrega (se realiza el pago al recibir el producto) </span>
                </li>
                <li>
                    <span class="policy-icon"><i class="fa-solid fa-plane fa-lg"></i></span>
                    <span class="policy-desc">Envío a nivel Nacional </span>
                </li>
            </ul>
            <div class="checkout-process">
                <div class="top">
                    <input type="number" value="1" onchange="changeSubtotal(this.value, ${product.price})" class="input" id="quantity" />
                    <div class="subtotal-container">
                        <span class="subtotal-label">Subtotal</span>
                        <span class="subtotal" id="subtotal">$${product.price}</span>
                    </div>
                    <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                    <button class="btn-outline">Añadir al Carrito</button>
                </div>
            </div>
    `;
    const detailsSelector = document.querySelector('.checkout-container');
    detailsSelector.innerHTML = detailsTemplate;
}

function changeSubtotal(quantity, price) {
    const subtotal = quantity * price;
    document.getElementById('subtotal').textContent = `$${subtotal}`;
}

printImages(id);
printDetails(id);
printCheckouts(id);
changeMainImage(id);