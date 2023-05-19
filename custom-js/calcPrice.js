
function priceCalc(){
    let total = 0;
    const cartItems = document.querySelectorAll('.tbody-item tr');
    const priceEl = document.querySelector('.total-price');
    cartItems.forEach(function(element) {
        const amount = element.querySelector('.qty-text');
        const price = element.querySelector('.price');
        const currentPrice = parseInt(amount.value) * parseInt(price.innerText);
        total += currentPrice;
        console.log(currentPrice);
        localStorage.setItem('total', JSON.stringify(total));
    })
    if(priceEl && cartItems != []){
        priceEl.innerText = total ? total + ' p' : '0 p';
    }
    if(priceEl && cartItems){
        total = JSON.parse(localStorage.getItem('total'));
        priceEl.innerText = total ? total + ' p' : '0 p';
    }
}

priceCalc();
