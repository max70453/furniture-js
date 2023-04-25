import { products } from "./products.js";
const block = document.querySelector('.container-fluid');
let template;
let details = () => {
    let url_string = window.location; 
    let url = new URL(url_string);
    let id = url.searchParams.get("id");
    console.log(id);
    products.forEach(element => {
        if(element.id == id)
        {
            let rating = ()=>{
                let total = "";
                for (let i = 0; i < element.rating; i++){
                    total += `<i class="fa fa-star" aria-hidden="true"></i>`;
                }
                return total;
            }
            template = `
            <div class="row">
            <div class="col-12 col-lg-7">
                <div class="single_product_thumb">
                    <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li class="active" data-target="#product_details_slider" data-slide-to="0" style="background-image: url(img/product-img/${element.img[0]});">
                            </li>
                            <li data-target="#product_details_slider" data-slide-to="1" style="background-image: url(img/product-img/${element.img[0]});">
                            </li>
                            <li data-target="#product_details_slider" data-slide-to="2" style="background-image: url(img/product-img/${element.img[0]});">
                            </li>
                            <li data-target="#product_details_slider" data-slide-to="3" style="background-image: url(img/product-img/${element.img[0]});">
                            </li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <a class="gallery_img" href="img/product-img/${element.img[0]}">
                                    <img class="d-block w-100" src="img/product-img/${element.img[0]}" alt="First slide">
                                </a>
                            </div>
                            <div class="carousel-item">
                                <a class="gallery_img" href="img/product-img/${element.img[0]}">
                                    <img class="d-block w-100" src="img/product-img/${element.img[0]}" alt="Second slide">
                                </a>
                            </div>
                            <div class="carousel-item">
                                <a class="gallery_img" href="img/product-img/${element.img[0]}">
                                    <img class="d-block w-100" src="img/product-img/${element.img[0]}" alt="Third slide">
                                </a>
                            </div>
                            <div class="carousel-item">
                                <a class="gallery_img" href="img/product-img/${element.img[0]}">
                                    <img class="d-block w-100" src="img/product-img/${element.img[0]}" alt="Fourth slide">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="single_product_desc">
                    <!-- Product Meta Data -->
                    <div class="product-meta-data">
                        <div class="line"></div>
                        <p class="product-price">${element.price}p</p>
                        <a href="product-details.html">
                            <h6 class="card-title">${element.name}</h6>
                        </a>
                        <!-- Ratings & Review -->
                        <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                            <div class="ratings">
                                ${rating()}
                            </div>
                            <div class="review">
                                <a href="#">Написать обзор</a>
                            </div>
                        </div>
                        <!-- Avaiable -->
                        <p class="avaibility">
                            <i class="fa fa-circle" style="${element.inStock ? 'color: #20d34a;' : 'color: #ff0000;'}"></i>
                            ${element.inStock ? ' В наличии' : ' Нет в наличии'}
                        </p>
                    </div>

                    <div class="short_overview my-5">
                        <p>${element.descr}</p>
                    </div>

                    <!-- Add to Cart Form -->
                    <form class="cart clearfix" method="post">
                        <div class="cart-btn d-flex mb-50">
                            <p>Кол-во</p>
                            <div class="quantity">
                                <span class="qty-minus">
                                    <i class="fa fa-caret-down" data-target="minus" aria-hidden="true"></i>
                                </span>
                                <input type="number" class="qty-text" step="1" min="1" max="300" name="quantity" value="1">
                                <span class="qty-plus">
                                    <i class="fa fa-caret-up" data-target="plus" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <button data-cart type="button" name="addtocart" value="5" class="btn amado-btn">Добавить в корзину</button>
                    </form>

                </div>
            </div>
        </div>
            `;
        }
    });
    return template;
};
const result = details();
block.insertAdjacentHTML('beforeend', result);