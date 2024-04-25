class Product {
    constructor(id,name, description, price, discount, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.image = image;
    }
}
const product1 = new Product(
    1,
    'Auricular Bluetooh',
    'Space Gray',
    1000,
    0.5,
    'assets/1.png'
);
const product2 = new Product(
    2,
    'Macbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    'assets/1.png'
);
const product3 = new Product(
    3,
    'Macbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    'assets/1.png'
);
const product4 = new Product(
    4,
    'Macbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    'assets/1.png'
);
const product5 = new Product(
    5,
    'Macbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    'assets/1.png'
);
const product6 = new Product(
    6,
    'Macbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    'assets/1.png'
);
const products = [product1, product2, product3, product4, product5, product6];