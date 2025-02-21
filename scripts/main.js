// Side bar
const header = document.getElementById('header');
const header_right = document.getElementById('header_right');
const close_button = document.getElementById('close_button');

header.addEventListener('click', () => {
    // Добавить или удалить класс 'open' для header
    header.classList.toggle('open');
    
    // Убедиться, что класс 'open' удаляется у header2, если он был
    if (header_right.classList.contains('open')) {
        header_right.classList.remove('open');
    }
});

close_button.addEventListener('click', () => {
    // Добавить или удалить класс 'open' для header2
    header_right.classList.toggle('open');
    
    // Убедиться, что класс 'open' удаляется у header, если он был
    if (header.classList.contains('open')) {
        header.classList.remove('open');
    }
});

const card = document.getElementById('card');
card.addEventListener('click', () => {
    // Добавить или удалить класс 'open' для header
    card.classList.toggle('delete');
});


// Carousel
$(document).ready(function(){
    // Инициализация первой карусели
    $('.carousel1').carousel({
        fullWidth: false,
    });
    // Инициализация первой карусели
    $('.carousel2').carousel({
        fullWidth: false,
    });
    // Автопрокрутка первой карусели
    // setInterval(() => {
    //     $('.carousel1').carousel('next');
    // }, 3000);
});



