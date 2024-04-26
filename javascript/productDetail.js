const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(query);
console.log(params);
console.log(id);
console.log(products);
function printImages(id){
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
    `;
    const detailsSelector = document.querySelector('.details');
    detailsSelector.innerHTML = detailsTemplate;

}
printImages(id);
printDetails(id);
changeMainImage(id);