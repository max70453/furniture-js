export let rating = (value)=>{
    let total = "";
    for (let i = 0; i < value.rating; i++){
        total += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }
    return total;
}
