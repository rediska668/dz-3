'use script';


const products = [{
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg", ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];



let productsPhoto = products.filter(item => "photos" in item && item.photos.length > 0);
console.log(productsPhoto);


//Функция сортировки от меньшего к большему по параметру price
function sortProduct(a, b) {
    return a.price - b.price;
}

products.sort(sortProduct);
console.log(products);