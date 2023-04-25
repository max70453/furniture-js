document.addEventListener("DOMContentLoaded", function(event) {
    // загрузка данных из хранилища
    let cart = JSON.parse(localStorage.getItem('card')) || []; 
    let dataCart = document.querySelectorAll('[data-placement]');
    
    // добавление товара в корзину
    function displayCart(cart){
        return cart.map(element => {
            return `<tr>
                <td class="cart_product_img">
                    <a href="#"><img src="${element.imgSrc}" alt="Product"></a>
                </td>
                <td class="cart_product_desc">
                    <h5>${element.title}</h5>
                </td>
                <td class="price">
                    <span>${element.price}</span>
                </td>
                <td class="qty">
                    <div class="qty-btn d-flex">
                        <p>Кол-во</p>
                        <div class="quantity">
                            <span class="qty-minus"><i class="fa fa-minus" data-target="minus" aria-hidden="true"></i></span>
                            <input type="number" class="qty-text" step="1" min="1" max="300" name="quantity" value="${element.qty}">
                            <span class="qty-plus"><i class="fa fa-plus" data-target="plus" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </td>
            </tr>
            `
        }).join('');
    }

    // поиск элемента контейнера для вставки товара
    const tbody = document.querySelector('.tbody-item');

    // если элемент найден, можно вставить данные
    if(tbody !== null)
    {
        tbody.insertAdjacentHTML('beforeend', displayCart(cart));
    }

    // клик на кнопке товара
    window.addEventListener('click', function(event){
        if (event.target.hasAttribute('data-cart')) { 
            const card = event.target.closest('.container-fluid');
            const productCard = {
                imgSrc: card.querySelector('.d-block').getAttribute('src'),
                title: card.querySelector('.card-title').innerText,
                price: card.querySelector('.product-price').innerText,
                qty: card.querySelector('.qty-text').value,
                qty: 1
            }

            cart.push(productCard);
            // удаление дубликатов товара из массива cart
            const res = cart.reduce((cart, i) => {
                if (!cart.find(v => v.title == i.title)) {
                cart.push(i);
                }
                return cart;
            }, []);
            localStorage.setItem('card', JSON.stringify(res));
            displayCart(res);
            window.location.href = 'https://max70453.github.io/cart.html';
            // event.preventDefault();
        }
    });

        // клик на иконке корзины
        dataCart.forEach(cartElement => {
            cartElement.addEventListener('click', (event) => {
                event.preventDefault();
                const card = event.target.closest('.single-product-wrapper');
                const productCard = {
                    imgSrc: card.querySelector('.product-img img').getAttribute('src'),
                    title: card.querySelector('.product-meta-data h6').innerText,
                    price: card.querySelector('.product-price').innerText,
                    qty: 1
                }
                cart.push(productCard);
                console.log(productCard);
                const res = cart.reduce((cart, i) => {
                    if (!cart.find(v => v.title == i.title)) {
                    cart.push(i);
                    }
                    return cart;
                }, []);
                localStorage.setItem('card', JSON.stringify(res));
                displayCart(res);
                window.location.href = 'https://max70453.github.io/cart.html';
            });
        });
    priceCalc();
});
