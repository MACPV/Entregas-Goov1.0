import { changeStatus } from "./user.mjs";
document.addEventListener("DOMContentLoaded", () => {
    const buttonUser = document.getElementById("user-bttn");
    buttonUser.addEventListener("click", changeUserImg);
})

window.changeUserImg = changeUserImg
export function changeUserImg() {
    
    const userImg = document.querySelector('#user-icon');
    const cartview = document.querySelector('#cart-link');

    if (localStorage.getItem("user") == "true") {
        userImg.removeAttribute('class');
        userImg.setAttribute('class', 'fa-solid fa-user-check fa-xl');
        cartview.setAttribute('class', 'fa-solid fa-cart-shopping fa-bounce fa-lg');
        cartview.setAttribute("style", "color: #ffffff;")
        changeStatus();
    } else {
        userImg.removeAttribute('class');
        userImg.setAttribute('class', 'fa-solid fa-circle-user fa-beat-fade fa-2xl');
        cartview.removeAttribute('class');
        changeStatus();
    }
}