function cartStatus(){
    const cartSummary = document.querySelector('.tbody-item');
    const bage = document.querySelector('.cart-summary h5');

    // текущая проверка корзины на наличие товаров в ней
    if(cartSummary.children.length == 0)
    {
        bage.innerText = "Корзина пуста";
        localStorage.clear();
    }
}

