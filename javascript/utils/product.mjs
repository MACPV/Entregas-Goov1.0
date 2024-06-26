class Product {
    constructor(id, name, description, price, discount, image, color) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.image = image;
        this.color = color;
    }
}
const product1 = new Product(
    1,
    'Auricular Bluetooh',
    'Space Gray',
    20,
    0.5,
    ['assets/1.png', 'assets/2.png', 'assets/3.png', 'assets/4.png', 'assets/5.png', 'assets/6.png'],
    ['black']
);
const product2 = new Product(
    2,
    'Gatillero',
    'W11 +',
    1000,
    0.5,
    ['assets/2/1.jpg', 'assets/2.png', 'assets/3.png', 'assets/4.png', 'assets/5.png'],
    ['gris']
);
const product3 = new Product(
    3,
    'Zacbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    ['assets/1.png', 'assets/2.png', 'assets/3.png', 'assets/4.png', ],
    ['red', 'black']
);
const product4 = new Product(
    4,
    'Mbcbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    ['assets/1.png', 'assets/2.png', 'assets/4.png', 'assets/5.png'],
    ['blue', 'red', 'black']
);
const product5 = new Product(
    5,
    'Macbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    ['assets/1.png', 'assets/2.png', 'assets/3.png', 'assets/5.png'],
    ['green']
);
const product6 = new Product(
    6,
    'Macbook PRO 15mil 15\'4',
    'Space Gray',
    1000,
    0.5,
    ['assets/1.png',  'assets/3.png', 'assets/4.png', 'assets/5.png'],
    ['yellow']
);
export const products = [product1, product2, product3, product4, product5, product6];