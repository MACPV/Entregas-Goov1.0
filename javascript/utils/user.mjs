
document.addEventListener("DOMContentLoaded", () => {
    const buttonUser = document.getElementById("user-bttn");
    
    buttonUser.addEventListener("click", changeStatus);
})





export function changeStatus() {
    if (localStorage.getItem("user") == "true") {
        localStorage.setItem("user", false);
    } else {
        localStorage.setItem("user", true);
    }
}