import { rating } from "./rating.js";


export let renderShopProd = (value)=>{
    const viewRenderBlock = document.querySelector('.view-active');
    
    if(viewRenderBlock.dataset.view === 'block'){
        return `
            <div class="col-12 col-sm-6 col-md-12 col-xl-6 product">
                <div class="single-product-wrapper">
                    <div class="product-img">
                        <img src="img/product-img/${value.img[0]}" alt="${value.name}">
                    </div>

                    <div class="product-description d-flex align-items-center justify-content-between">

                        <div class="product-meta-data">
                            <div class="line"></div>
                            <p class="product-price">${value.price}р</p>
                            <a href="product-details.html?id=${value.id}">
                                <h6 data-product="chair" data-brand="amado">${value.name}</h6>
                            </a>
                        </div>
                
                        <div class="ratings-cart text-right">
                            <div class="ratings">
                            ${rating(value)}
                            </div>
                            <div class="cart">
                                <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    if(viewRenderBlock.dataset.view === 'list'){
        return `
        <div class="single-product-wrapper list-wrapper">
            <div class="product-img list-img">
                <img src="img/product-img/${value.img[0]}" class="list-img" alt="${value.name}">
            </div>

            <div class="product-description list-description">

                <div class="product-meta-data list-metadata">
                    <div class="list-head">
                        <div class="list-head__title">
                            <div class="line"></div>
                            <p class="product-price">${value.price}р</p>
                            <a href="product-details.html?id=${value.id}">
                                <h6 data-product="chair" class="list-title" data-brand="amado">${value.name}</h6>
                            </a>
                        </div>
                        <div class="ratings-cart text-right rating-list">
                            <div class="ratings">
                            ${rating(value)}
                            </div>
                            <div class="cart">
                                <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <p class="list-description">
                        Предмет мебели для сидения одного человека, с опорой для спины с подлокотниками или без них. Разграничение между стулом и креслом - комфортабельность изделия, рабочее кресло при этом может вовсе не отличаться от рабочего стула.
                    </p>
                </div>  

            </div>
        </div>
        `;
    }
}