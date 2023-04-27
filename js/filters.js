import { products } from "./products.js";
import { renderShopProd } from './shopTemplate.js';
import { shop } from "./showShop.js";

let filter = {
    brands: [],
    colors: [],
    price: [],
};

let minPrice = 100;
let maxPrice = 20000;

let filterBtn = document.querySelector(".filterBtnjs");
let Container = document.querySelector(".productsjs");

let menu = document.querySelectorAll("[data-menu]");
let menuProducts = products;

//menu 
menu.forEach( item => {
    item.addEventListener('click', () => {
        menuProducts = products;
        menuProducts = menuProducts.filter( product => product.furniture === item.dataset.menu);
        window.history.pushState({}, document.title, window.location.pathname);
        if(menuProducts.length < 1){
            menuProducts.push('empty');
        }
        shop(menuProducts);
    });
})


$('.slider-range-price').each(function () {
    var min = jQuery(this).data('min');
    var max = jQuery(this).data('max');
    var unit = jQuery(this).data('unit');
    var value_min = jQuery(this).data('value-min');
    var value_max = jQuery(this).data('value-max');
    var label_result = jQuery(this).data('label-result');
    var t = $(this);
    $(this).slider({
        range: true,
        min: min,
        max: max,
        values: [value_min, value_max],
        slide: function (event, ui) {
            var result = label_result + " " + ui.values[0] + unit + ' - ' + ui.values[1] + unit;
            minPrice = ui.values[0];
            maxPrice = ui.values[1];
            t.closest('.slider-range').find('.range-price').html(result);
        }
    });
});


//filter
filterBtn.addEventListener('click', ()=>{
    const name = new URLSearchParams(window.location.search).get('name')
    let filteredProducts = menuProducts;
    if(name){
        filteredProducts = JSON.parse(localStorage.getItem('searchProducts'));
    }
    let brands = document.querySelectorAll('.form-check-input');
    let colors = document.querySelectorAll('[data-color]');

    brands.forEach(brand=>{
        if(brand.checked){
            filter.brands.push(brand.dataset.brand);
        }
    });
    colors.forEach(color=>{
        if(color.classList.contains('color-active')){
            filter.colors.push(color.dataset.color);
        }
    });

    filter.price[0] = minPrice;
    filter.price[1] = maxPrice;
    
    if(filter.brands.length > 0){
      filteredProducts = filteredProducts.filter(item => filter.brands.includes(item.brand));  
    };
    if(filter.colors.length > 0){
        filteredProducts = filteredProducts.filter(item => filter.colors.includes(item.color.toLocaleLowerCase()));
    }
    if(filter.price.length > 0){
        filteredProducts = filteredProducts.filter(item => item.price >= filter.price[0] && item.price <= filter.price[1]);
    }

    filter.brands = [];
    filter.colors = [];
    filter.price = [];

    if(filteredProducts.length < 1){
        filteredProducts.push('empty');
    }
    
    
    shop(filteredProducts);
})

const select = document.querySelector('.nice-select');
select.addEventListener('click', event => {
    if(event.target.innerText === "Новейшие")
    {
        let elements = Container.querySelectorAll('.single-product-wrapper');
        elements.forEach(element => element.remove());

        products.forEach(prodEl => {
            if(prodEl.new){
                Container.insertAdjacentHTML('beforeend', renderShopProd(prodEl));
            }
        });
    }
    else if(event.target.innerText === "Популярные")
    {
        let elements = Container.querySelectorAll('.single-product-wrapper');
        elements.forEach(element => element.remove());

        products.forEach(prodEl => {
            if(prodEl.popular){
                Container.insertAdjacentHTML('beforeend', renderShopProd(prodEl));
            }
        });
    }
});

let view = document.querySelectorAll('[data-view]');

view.forEach( v => {
    v.addEventListener('click', () => {
        let btn = Array.from(view).find(vi  => vi.classList.contains('view-active'));
        btn.classList.remove('view-active');
        v.classList.add('view-active');
        shop([]);
    });
})
