let car = {name : '지바겐', price : 10320000};

// $('.card').html(car.name + ' / ' + car.price);
document.querySelector('.card').innerHTML = car.name + ' / ' + car.price;