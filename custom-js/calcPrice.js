function priceCalc(){
    let total = 0;
    const cartItems = document.querySelectorAll('.tbody-item tr');
    const priceEl = document.querySelector('.total-price');
    cartItems.forEach(function(element) {
        const amount = element.querySelector('.qty-text');
        const price = element.querySelector('.price');
        const currentPrice = parseInt(amount.value) * parseInt(price.innerText);
        total += currentPrice;
    })
    if(priceEl)
        priceEl.innerText = total + ' p';
}



