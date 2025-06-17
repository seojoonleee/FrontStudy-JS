let startXY = 0;
let flag = false;

$('.carousel-container').on('mousedown', function(e) {
    startXY = e.clientX;
    flag = true;
});

$('.carousel-container').on('mouseup', function(e) {    
    flag = false;
    if(-(e.clientX - startXY) > 200) {
        $('.carousel-container').css('transform', 'translateX(-100vw)');
    } else {
        $('.carousel-container').css('transform', 'translateX(0vw)');
    }
});

$('.carousel-container').on('mousemove', function(e) {
    if(flag) {
        $('.carousel-container').css('transform', `translateX(${e.clientX-startXY}px)`);    
    }
});