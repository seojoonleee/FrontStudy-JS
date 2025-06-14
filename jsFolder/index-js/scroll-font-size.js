window.addEventListener('scroll', function() {
    if(window.scrollY > 100) {
        // $('.navbar-brand').addClass('navbar-brand-size-down');
        $('.navbar-brand').css('font-size', '15px');
    } else {
        // $('.navbar-brand').removeClass('navbar-brand-size-down');
        $('.navbar-brand').css('font-size', '25px');
    }
});