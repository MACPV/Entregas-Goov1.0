

import { products } from "../utils/product.mjs";

export function printDetails(id) {
    const product = products.find(product => product.id == id);
    const detailsTemplate = `
    <div class="product-description-block">
        <h1 class="title">${product.name}</h1>
        <form class="selector">
            <fieldset>
                <label class="label" for="color">Color Disponible </label>
                <select type="text" id="color-${id}" placeholder="Selecciona un color">
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
