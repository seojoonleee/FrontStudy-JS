$(window).scroll(function() {
    let scrollHeight = $(window).scrollTop();
    console.log(scrollHeight);
    let opac = (-1/500) * scrollHeight + 115/50;
    let size = (-1/5000) * scrollHeight + 545/500;

    $('.card-box').eq(0).css('opacity', opac);
    $('.card-box').eq(0).css('transform', `scale(${size})`);

    // for(let i = 0; i < 3; i++) {
    //     $('.card-box').eq(i).css('opacity', opac);
    //     $('.card-box').eq(i).css('transform', `scale(${size})`);
    // }
});