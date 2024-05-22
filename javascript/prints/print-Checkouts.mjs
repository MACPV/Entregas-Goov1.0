import { saveProduct } from "../cart/save-product.mjs";
import { products } from "../utils/product.mjs";
window.saveProduct = saveProduct;
window.changeSubtotal = changeSubtotal;
export function printCheckouts(id) {
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
                    <input type="number" value="1" onchange="changeSubtotal(this.value, ${product.price})" class="input" id="quantity-${id}" />
                    <div class="subtotal-container">
                        <span class="subtotal-label">Subtotal</span>
                        <span class="subtotal" id="subtotal">$${product.price}</span>
                    </div>
                    <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                    <button class="btn-outline" onclick="saveProduct(${product.id})">Añadir al Carrito</button>
                </div>
            </div>
    `;
    const detailsSelector = document.querySelector('.checkout-container');
    detailsSelector.innerHTML = detailsTemplate;
}


export function changeSubtotal(quantity, price) {
    const subtotal = quantity * price;
    document.getElementById('subtotal').textContent = `$${subtotal}`;
}