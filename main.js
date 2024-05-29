// mobile navigation

const menuBtn = document.querySelectorAll('.btn');
const navMenu = document.querySelector('#mobile-menu');

menuBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.className.includes('btn')) {
            navMenu.classList.toggle('hidden')
        }
    })
})

// carousel script

const controlBtn = document.querySelector('#control');
const backgroundArray = [
    'bgd-product1',
    'bgd-product2',
    'bgd-product3',
    'bgd-product4'
];
const carousel = document.querySelector('#bg');
let currentBG = 0;

controlBtn.addEventListener('click', (e) => {
    if (e.target.className.includes('next')) {
        currentBG = (currentBG + 1) % backgroundArray.length
        carousel.classList.replace(carousel.classList[0], backgroundArray[currentBG]);
    }
    if (e.target.className.includes('prev')) {
        currentBG = (currentBG - 1 + backgroundArray.length) % backgroundArray.length;
        carousel.classList.replace(carousel.classList[0], backgroundArray[currentBG]);
    }
});

setInterval(() => {
    currentBG = (currentBG + 1) % backgroundArray.length
    carousel.classList.replace(carousel.classList[0], backgroundArray[currentBG]);
}, 5000);

// number of item increment or decrement

const numberOfItem = document.querySelector('#number-of-item');
const item = document.querySelector('.item');

numberOfItem.addEventListener('click', (e) => {
    if (e.target.className.includes('plus')) {
        let value = (parseInt(item.innerHTML)) + 1;
        item.innerHTML = value;
    }
    if (e.target.className.includes('minus')) {
        if (parseInt(item.innerHTML) !== 0) {
            value = ((parseInt(item.innerHTML)) - 1);
            item.innerHTML = value;
        }
    }
});

// adding to cart
let addToCart = document.querySelector('#add-to-cart');
let cartBadge = document.querySelector('#cart-badge');

addToCart.addEventListener('click', (e) => {
    if (item.innerHTML != 0) {
        cartBadge.classList.remove('hidden');
        cartBadge.innerHTML = item.innerHTML;
        deleteItem.classList.remove('hidden');
        checkout.classList.remove('hidden');
    }
});

const cart = document.querySelector('#cart');
const cartNotEmpty = document.querySelector('#cart-notEmpty');
const cartEmpty = document.querySelector('#cart-empty');
const cartDropDown = document.querySelector("#cart-dropdown");
let price = document.querySelector("#price");
let actualPrice = document.querySelector("#actual-value");
let multiplier = document.querySelector("#multiplier");
let total = document.querySelector("#total-value");

cart.addEventListener('click', (e) => {
    cartDropDown.classList.toggle('hidden');

    if (!(cartBadge.className.includes('hidden'))) {
        cartEmpty.classList.add('hidden');
        actualPrice.innerHTML = '$' + parseInt(price.innerHTML);
        multiplier.innerHTML = cartBadge.innerHTML;
        total.innerHTML = '$' + (parseInt(price.innerHTML) * parseInt(multiplier.innerHTML));
        cartNotEmpty.classList.remove('hidden');
    }
});

// delete button
const deleteItem = document.querySelector("#delete-item");
const checkout = document.querySelector("#checkout");
deleteItem.addEventListener('click', (e) => {
    if (e.target.className.includes('delete')) {
        deleteItem.classList.add('hidden');
        checkout.classList.add('hidden');
        cartEmpty.classList.remove('hidden');
        cartBadge.classList.add('hidden')
        item.innerHTML = '0';
    }
});

// Lightbox section

const tbn1 = document.querySelectorAll(".tbn1");
const tbn2 = document.querySelectorAll(".tbn2");
const tbn3 = document.querySelectorAll(".tbn3");
const tbn4 = document.querySelectorAll(".tbn4");
const lightBox = document.querySelector("#lightbox");
const closeLightbox = document.querySelector("#close-lightbox");
const lightBoxImage = document.querySelector("#lightbox-image");

closeLightbox.addEventListener('click', ()=>{
    lightBox.classList.replace('lg:flex', 'lg:hidden');
});

tbn1.forEach((tbn) =>{
    tbn.addEventListener('click', (e) =>{
        lightBox.classList.replace('lg:hidden', 'lg:flex');
        lightBoxImage.src = "./images/image-product-1.jpg"
    });
});
tbn2.forEach((tbn) =>{
    tbn.addEventListener('click', (e) =>{
        lightBox.classList.replace('lg:hidden', 'lg:flex');
        lightBoxImage.src = "./images/image-product-2.jpg"
    });
});
tbn3.forEach((tbn) =>{
    tbn.addEventListener('click', (e) =>{
        lightBox.classList.replace('lg:hidden', 'lg:flex');
        lightBoxImage.src = "./images/image-product-3.jpg";
    });
});
tbn4.forEach((tbn) =>{
    tbn.addEventListener('click', (e) =>{
        lightBox.classList.replace('lg:hidden', 'lg:flex');
        lightBoxImage.src = "./images/image-product-4.jpg"
    });
});

const lightBoxControl = document.querySelector("#lightbox-control"); 
const lightBoxImageArray = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];
let productImage = 0;

lightBoxControl.addEventListener('click', (e) => {
    if (e.target.className.includes('next')) {
        productImage = (productImage + 1) % lightBoxImageArray.length;
        lightBoxImage.src = lightBoxImageArray[productImage];
    }
    if (e.target.className.includes('prev')) {
        productImage = (productImage - 1 + lightBoxImageArray.length) % lightBoxImageArray.length;
        lightBoxImage.src = lightBoxImageArray[productImage];
    }
});