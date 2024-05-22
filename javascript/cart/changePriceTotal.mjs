
const local = JSON.parse(localStorage.getItem('cart')) || [];
console.log(local);

export function changeQuantity(id, value) {
    const productCart = local.find((product) => product.id === id);
    productCart.quantity = value;
    localStorage.setItem('cart', JSON.stringify(local));
    console.log(productCart);
    console.log(local);
}

export function updatePriceCart(id) {
    const productCart = local.find((product) => product.id === id);
    if (productCart) {
        const priceElement = document.getElementById(`price-${id}`);
        const updatedPrice = productCart.quantity * productCart.price;
        priceElement.innerHTML = `$${updatedPrice.toFixed(2)}`;
    }
}
