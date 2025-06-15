var products = [
        { id : 0, price : 70000, title : 'Blossom Dress' },
        { id : 1, price : 50000, title : 'Springfield Shirt' },
        { id : 2, price : 60000, title : 'Black Monastery' }
];

for(let i = 0; i < 3; i++) {
    $('.title' + (i + 1)).html(products[i].title);
    $('.price' + (i + 1)).html(products[i].price);
}

products.forEach((data) => {
    const layout = `<div class="col-sm-4">
                <img src="https://placehold.co/600" class="w-100">
                <h5>${data.title}</h5>
                <p>가격: ${data.price}</p>
            </div>`;
            
    $('.row').append(layout);
})