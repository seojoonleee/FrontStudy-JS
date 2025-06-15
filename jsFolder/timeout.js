/* setTimeout(function(){            
    $('.alert-danger').hide();
}, 5000) */
let count = 5;

setInterval(function() {
    $('.alert-danger').html(count + '초 남았습니다...');
    count -= 1;
    if(count == -1) {
        $('.alert-danger').hide();
    }
}, 1000);
/* setInterval(function(){
    $('.alert-danger').toggle();
}, 5000) */