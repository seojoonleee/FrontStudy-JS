$('.navbar-toggler').on('click', function() {        
    $('.list-group').toggleClass('show');
});

$('#login').on("click", function() {
    $('.black-bg').addClass('show-modal');
});

$('form').on('submit', function(e) {            
    if($('#id').val() == '') {                
        alert('아이디를 입력해주세요.');
        e.preventDefault();
    }
    else if(!(/\S+@\S+\.\S+/.test($('#id').val()))){
        alert('올바른 형식의 이메일이 아닙니다.');
        e.preventDefault();
    }
    else if ($('#pw').val() == '') {
        alert('비밀번호를 입력해주세요.');
        e.preventDefault();
    }
    else if($('#pw').val().length < 6) {
        alert('비밀번호를 6자 이상으로 입력해주세요.');
        e.preventDefault();
    }
    else if(!(/[A-Z]/.test($('#pw').val()))) {
        alert('비밀번호는 최소 하나의 알파벳 대문자를 포함해야 합니다.');
        e.preventDefault();
    }
});

$('#close').on('click', function() {
    $('.black-bg').removeClass('show-modal');
});