import {products} from "./products.js";
import { shop } from "./showShop.js";

const name = new URLSearchParams(window.location.search).get('name')
if(name){
    shop(JSON.parse(localStorage.getItem('searchProducts')));
}

(function ($) {
    'use strict';

    var $window = $(window);

    // :: 1.0 Masonary Gallery Active Code
    var proCata = $('.amado-pro-catagory');
    var singleProCata = ".single-products-catagory";

    if ($.fn.imagesLoaded) {
        proCata.imagesLoaded(function () {
            proCata.isotope({
                itemSelector: singleProCata,
                percentPosition: true,
                masonry: {
                    columnWidth: singleProCata
                }
            });
        });
    }

    // :: 2.1 Search Active Code
    var amadoSearch = $('.search-nav');
    var searchClose = $('.search-close');

    amadoSearch.on('click', function () {
        $('body').toggleClass('search-wrapper-on'); 
        
    let searchform = document.querySelector('.searchjs');

    searchform.addEventListener("submit", (e) => {
        e.preventDefault();
        let searchProducts = [];
        const val = searchform.elements['search']; 

        if(val.value){
            products.forEach(product => {
                if(product.name.toLowerCase().includes(val.value.toLowerCase()) ){
                    searchProducts.push(product);
                }
            });
        }

        if(searchProducts.length > 0){
            
           
        }localStorage.setItem('searchProducts', JSON.stringify(searchProducts)); 
//         document.location.href.replace(location.hash , "" );
        window.location.assign(`https://max70453.github.io/furniture-js/shop.html?name=${val.value}`);
//         document.location.assign(location.hash , `https://max70453.github.io/furniture-js/shop.html?name=${val.value}` );
        val.value = '';
        searchProducts = [];
      });
  
    });

    searchClose.on('click', function () {
        $('body').removeClass('search-wrapper-on');
    });

    // :: 2.2 Mobile Nav Active Code
    var amadoMobNav = $('.amado-navbar-toggler');
    var navClose = $('.nav-close');

    amadoMobNav.on('click', function () {
        $('.header-area').toggleClass('bp-xs-on');
    });

    navClose.on('click', function () {
        $('.header-area').removeClass('bp-xs-on');
    });

    // :: 3.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: 4.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
        }
    });

    // :: 5.0 Nice Select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: 6.0 Magnific Active Code
    if ($.fn.magnificPopup) {
        $('.gallery_img').magnificPopup({
            type: 'image'
        });
    }

    // :: 7.0 Nicescroll Active Code
    if ($.fn.niceScroll) {
        $(".cart-table table").niceScroll();
    }

    // :: 8.0 wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 10.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    let colors = document.querySelectorAll('[data-color]');
    colors.forEach(color => {
        color.addEventListener('click', ()=>{
            color.classList.toggle('color-active');
        });
    })

    
    let url=document.location.href;
    
    $.each($(".amado-nav ul li"),function(){
        if(this.firstChild.href==url){
            $(this).addClass('active');
        };
    });

    // отображает изменение общего количества товаров в корзине
    let cartCounter = document.querySelector('.cart-fav-search span');
    let local = JSON.parse(localStorage.getItem('card')) || [];
    cartCounter.innerText = local.length;

    // проверка статуса корзины при первой загрузке страницы
    const bage = document.querySelector('.cart-summary h5');
    
    if(JSON.parse(localStorage.getItem('card')))
    {
        if(bage)
            bage.innerText = "Ваш заказ";
    }
    if(!JSON.parse(localStorage.getItem('card')) && bage != null)
    {
        bage.innerText = "Корзина пуста";
    }
    
})(jQuery);
