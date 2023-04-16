const categorys = document.querySelectorAll('.product');
const brands = document.querySelectorAll('.form-check-input');
const products = document.querySelector('.products');
const price = document.querySelector('.slider-range-price');

brands.forEach(element => {
    element.checked = false;
});
function rangePrice(min, max){
    let curPrice;
    categorys.forEach(price => {
        curPrice = parseInt(price.querySelector('.product-price').innerText);
        if(curPrice >= min && curPrice <= max)
            products.append(price);
        else
            price.remove();
    });
}
window.addEventListener('click', function(event)
{
    if(event.target.closest('.shop_sidebar_area'))
    {

        const target = event.target.dataset.menu;
        let currentPrice = event.target.closest('.slider-range');

        categorys.forEach( element => {
            if(target === element.querySelector('h6').dataset.product)
                products.append(element);
            else
                element.remove();
        });

        brands.forEach(element => {
            categorys.forEach(item => {
                    if(element.checked)
                    {
                        if(element.dataset.brand === item.querySelector('h6').dataset.brand)
                            products.append(item);
                        else
                            item.remove();
                    }
                    if(element.checked !== event.target.checked)
                        element.checked = false;
                });
            });
        }
        
});