// 반복문 방식
/* for(let i = 0; i < $('.tab-button').length; i++) {
    $('.list').eq(i).on('click', function() {
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).addClass('show');
    });
}  */

// dataset 방식
$('.list').on('click', function(e) {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(e.target.dataset.id).addClass('orange');
    $('.tab-content').eq(e.target.dataset.id).addClass('show');
});
