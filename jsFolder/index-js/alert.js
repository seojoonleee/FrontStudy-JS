$('.terms').on('scroll', function() {
    if(document.querySelector('.terms').scrollTop + document.querySelector('.terms').clientHeight > document.querySelector('.terms').scrollHeight - 10) {
        alert('약관을 끝까지 읽으셨습니다.');                
    }
});