// import cartStatus from './cartStatus.js';

window.addEventListener('click', function(event){
    if (event.target.dataset.target === 'plus' || event.target.dataset.target === 'minus') {
        let quantity = event.target.closest('.quantity');
        let counter = quantity.querySelector('.qty-text').value;

        if (event.target.dataset.target === 'plus') {
            if(counter < 20){
                quantity.querySelector('.qty-text').value = ++counter;
            }
            priceCalc();
        }

        if (event.target.dataset.target === 'minus') {
            if(counter >= 1){
                quantity.querySelector('.qty-text').value = --counter;
            }
            priceCalc();
        }
        // проверка на товар в корзине
        if (event.target.closest('.tbody-item') && counter === 0) {
            counter--;
            priceCalc();
            // localStorage.setItem('card', JSON.stringify());
            // JSON.parse(localStorage.getItem('card'))
            event.target.closest('tr').remove();
            cartStatus();
        }
    }
});