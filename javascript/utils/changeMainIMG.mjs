


window.changeMainImage = changeMainImage

export function changeMainImage(id) {
    const mainImage = document?.getElementById("main-image");
    const clickedImage = document.getElementById(id);
    
    mainImage.src = clickedImage?.src;
    mainImage.alt = clickedImage?.alt;
    console.log(mainImage);
}
    


document.addEventListener("DOMContentLoaded", function() {
    window.changeMainImage = changeMainImage;
});