let currentPage = 1;

$('.previous').on('click', function() {            
    if(currentPage > 1) {
        $('.carousel-container').css('transform', 'translateX(-' + (currentPage - 2) + '00vw)');
        currentPage -= 1;   
    }
});

$('.carousel-1').on('click', function() {
    $('.carousel-container').css('transform', 'translateX(0vw)');
    currentPage = 1;
});

$('.carousel-2').on('click', function() {
    $('.carousel-container').css('transform', 'translateX(-100vw)'); // js에선 .css로 html의 스타일 코드를 변경할 수 있음
    // transform: translateX(-100vw); 이게 margin-left 방식보다 부드러워서 애니메이션에서 쓰기 좋음
    currentPage = 2;
});

$('.carousel-3').on('click', function() {
    $('.carousel-container').css('transform', 'translateX(-200vw)');
    currentPage = 3;
});

$('.next').on('click', function() {            
    if(currentPage < 3) {
        $('.carousel-container').css('transform', 'translateX(-' + currentPage + '00vw)');
        currentPage += 1;
    }
});