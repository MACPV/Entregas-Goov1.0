/*
const navSelector = document.getElementById("nav");

const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "Contactanos", linkTo: "./how.html" },
    { title: "Catalogo", linkTo: "./taxs.html" },
];

for (let option of options) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    navSelector.appendChild(anchor)
}

const footerSelector = document.getElementById("footer");

const options1 = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auticulares"] },
    { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturacion"] },
    { title: "Mis pedidos", linkTo: "./", opts: ["Pedir nuevamente", "Lista de deseos"] },
];

for (let option of options1) {
    const col = document.createElement("div");
    col.className = "col";

    const list = document.createElement("ul");

    // Crear un elemento de lista para el título principal de la columna
    const mainListItem = document.createElement("li");
    mainListItem.className = "col-main-item";
    const mainListItemLink = document.createElement("a");
    mainListItemLink.href = option.linkTo;
    mainListItemLink.textContent = option.title;
    mainListItem.appendChild(mainListItemLink);
    list.appendChild(mainListItem);

    // Crear elementos de lista para las opciones
    for (let opt of option.opts) {
        const listItem = document.createElement("li");
        const listItemLink = document.createElement("a");
        listItemLink.href = "#";
        listItemLink.textContent = opt;
        listItem.appendChild(listItemLink);
        list.appendChild(listItem);
    }

    // Agregar la lista a la columna y la columna al #footer
    col.appendChild(list);
    footer.appendChild(col);
}*/


export const renderLayout = () => {
    fetch('../json/options.json')
        .then(response => response.json())
        .then(data => {
            const navOptions = data.navOptions;
            const footerOptions = data.footerOptions;

            // Renderizar las opciones de navegación
            const navSelector = document.getElementById("nav");
            for (let option of navOptions) {
                const anchor = document.createElement("a");
                anchor.className = "nav-button";
                anchor.textContent = option.name;
                anchor.href = option.url;
                navSelector.appendChild(anchor);
            }

            // Renderizar las opciones del pie de página
            const footerSelector = document.getElementById("footer");
            for (let option of footerOptions) {
                const col = document.createElement("div");
                col.className = "col";

                const list = document.createElement("ul");

                const mainListItem = document.createElement("li");
                mainListItem.className = "col-main-item";
                const mainListItemLink = document.createElement("a");
                mainListItemLink.href = "#";
                mainListItemLink.textContent = option.category;
                mainListItem.appendChild(mainListItemLink);
                list.appendChild(mainListItem);

                if (Array.isArray(option.links)) {
                    for (let opt of option.links) {
                        const listItem = document.createElement("li");
                        const listItemLink = document.createElement("a");
                        listItemLink.href = opt.url;
                        listItemLink.textContent = opt.name;
                        listItem.appendChild(listItemLink);
                        list.appendChild(listItem);
                    }
                }

                col.appendChild(list);
                footerSelector.appendChild(col);
            }
        })
        .catch(error => console.error('Error loading options:', error));
}

renderLayout();

