import { products } from "./products.js";
import { renderShopProd } from './shopTemplate.js';

let pr;

export let shop = (products)=>{

    let shopProducts;

    if(products.length < 1){
        shopProducts = pr;
    }
    else{
        shopProducts = products;
    }

    let prodContainer = document.querySelector(".productsjs");
    const navigation = document.querySelector('.pagination');
    document.addEventListener("DOMContentLoaded", () => {
        let li = navigation.querySelector('li');
        if(li)
            li.classList.add('active');
      });
    

    let notesOnPage = 6;
    let start = 0;
    let end = notesOnPage;
    
    
    prodContainer.innerHTML = '';

    if(products.length > notesOnPage){
        shopProducts = products.slice(start, end);
    }
    
    let countPage = Math.ceil(products.length / notesOnPage);
    navigation.innerHTML = '';
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
    
            let notes = products.slice(start, end);
            prodContainer.innerHTML = '';
            notes.forEach( product => prodContainer.innerHTML += renderShopProd(product) );
        });
    }

    pr = shopProducts;

    shopProducts.forEach((product)=>{
        prodContainer.innerHTML += renderShopProd(product);
    });
}

if(window.location.href === 'http://127.0.0.1:5500/shop.html'){
    
}

shop(products);

