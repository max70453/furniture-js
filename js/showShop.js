import { products } from "./products.js";
import { renderShopProd } from './shopTemplate.js';

let pr;

export let shop = (products)=>{

    let shopProducts;

    const name = new URLSearchParams(window.location.search).get('name')
    if(products.length < 1){
        if(pr.length > 0){
            shopProducts = pr;
        }
        else if(name){
        shopProducts = JSON.parse(localStorage.getItem('searchProducts'));
        }
    }
    else{
        shopProducts = products;
    }

    let prodContainer = document.querySelector(".productsjs");
    const navigation = document.querySelector('.pagination');
    let notesOnPage = 6;
    let start = 0;
    let end = notesOnPage;
    
    prodContainer.innerHTML = '';

    let newProducts = shopProducts;

    if(shopProducts.length > notesOnPage){
        newProducts = shopProducts.slice(start, end);
    }
    
    let countPage = Math.ceil(shopProducts.length / notesOnPage);
    navigation.innerHTML = '';

    if(countPage > 1){
        for (let index = 0; index < countPage; index++) {
        let li = `<li class="page-item"><a class="page-link" href="#">${index+1}</a></li>`;
        navigation.insertAdjacentHTML('beforeend', li);
    }

    const paginate = document.querySelectorAll('.page-item');

    for(let item of paginate){
        item.addEventListener('click', function(){
            const active = navigation.querySelector('li.active');
            if(active){
                active.classList.remove('active');
            }
            this.classList.add('active');
            let pageNum = +this.innerText;
            let start = (pageNum -1) * notesOnPage;
            let end = start + notesOnPage;
    
            let notes = shopProducts.slice(start, end);
            prodContainer.innerHTML = '';
            notes.forEach( product => prodContainer.innerHTML += renderShopProd(product) );
        });
    }

    let li = document.querySelectorAll('.page-item');
    li[0].classList.add('active');
    }

    pr = shopProducts;

    if(newProducts[0] != 'empty'){
        newProducts.forEach((product)=>{
            prodContainer.innerHTML += renderShopProd(product);
        });
    }
    else{
        prodContainer.innerHTML = `<div style="padding-left: 10%; font-size: 20px;"><strong>По Вашему запросу товаров не найдено</strong></div>`;
    }
}

if(window.location.href === 'http://127.0.0.1:5500/shop.html'){
    shop(products);
}



