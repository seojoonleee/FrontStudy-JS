$('.form-select').on('input', function() {
    const pants = [28, 30, 32];
    const value = $('.form-select').eq(0).val();
    if(value == '셔츠') {
        $('.form-select').eq(1).removeClass('hide-select');
        $('.form-select').eq(1).html('');
        const a = `<option>90</option>
            <option>95</option>
            <option>100</option>
            <option>105</option>`;
        $('.form-select').eq(1).append(a);
    } else if (value == '바지') {
        $('.form-select').eq(1).removeClass('hide-select');
        $('.form-select').eq(1).html('');
        /* let a = '';
        for(let i = 0; i < pants.length; i++) {
            a += `<option>` + pants[i] + `</option>`;                
        } 
        $('.form-select').eq(1).append(a); */
       pants.forEach(function(a) {
            $('.form-select').eq(1).append(`<option>${a}</option>`);
        });        
    } else {
        $('.form-select').eq(1).addClass('hide-select');
    }
});