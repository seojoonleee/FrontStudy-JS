var products = [
        { id : 0, price : 70000, title : 'Blossom Dress' },
        { id : 1, price : 50000, title : 'Springfield Shirt' },
        { id : 2, price : 60000, title : 'Ylack Monastery' }
];
var sortProducts = [
        { id : 0, price : 70000, title : 'Blossom Dress' },
        { id : 1, price : 50000, title : 'Springfield Shirt' },
        { id : 2, price : 60000, title : 'Ylack Monastery' }
];

for(let i = 0; i < 3; i++) {
    $('.title' + (i + 1)).html(products[i].title);
    $('.price' + (i + 1)).html(products[i].price);
}

const layoutFn = (product) => {
    product.forEach((data) => {
        const layout = `<div class="col-sm-4">
                    <img src="https://placehold.co/600" class="w-100">
                    <h5>${data.title}</h5>
                    <p>가격: ${data.price}</p>
                    <button class="buy">구매</button>
                </div>`;
                
        $('.row').append(layout);
    })
};

layoutFn(products);

//  가격 내림차순 정렬
$('.price-sort').on('click', function() {
    sortProducts.sort(function(a, b) {
        return b.price - a.price;
    })
    $('.row').html('');
    layoutFn(sortProducts);
});

// 6만원 이하 제품
$('.price-filter').on('click', function() {
    const filter = products.filter(function(a) {
        return a.price <= 60000;
    })
    $('.row').html('');
    layoutFn(filter);
});

// 이름 내림차순 정렬
$('.title-sort').on('click', function() {
    sortProducts.sort(function(a, b) {
        if(a.title < b.title)
            return 1;
        else {
            return -1;
        }
    })
    $('.row').html('');
    layoutFn(sortProducts);
});

// 구매 버튼 클릭 시 형제 요소 찾아서 장바구니(localStorage)에 title 저장하기
$('.buy').on('click', function(e) {
    const title = $(e.target).siblings('h5').text();
    if(localStorage.getItem('pocket') == null) {        
        localStorage.setItem('pocket', JSON.stringify([title]));
    } else {
        let val = JSON.parse(localStorage.pocket);
        val.push(title);
        localStorage.setItem('pocket', JSON.stringify(val));
    }
});

// $('.buy').on('click', function(e){
//   var title = $(e.target).siblings('h5').text();
//   if (localStorage.getItem('cart') != null ){
//     var a = JSON.parse(localStorage.cart);
//     a.push(title);
//     localStorage.setItem('cart', JSON.stringify(a));
//   } else {
//     localStorage.setItem('cart', JSON.stringify([title]))
//   }
// });