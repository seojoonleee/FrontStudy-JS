let num = 0;

$('.dark-mode').on('click', function() {           
    num += 1;
    if(num % 2) document.querySelectorAll('.badge')[0].classList.replace('bg-dark', 'bg-light');
    else document.querySelectorAll('.badge')[0].classList.replace('bg-light', 'bg-dark');
    document.querySelectorAll('.light')[0].classList.toggle('dark');            
});