// Side bar
const header = document.getElementById('header');
const header2 = document.getElementById('header2');

header.addEventListener('click', () => {
    // Добавить или удалить класс 'open' для header
    header.classList.toggle('open');
    
    // Убедиться, что класс 'open' удаляется у header2, если он был
    if (header2.classList.contains('open')) {
        header2.classList.remove('open');
    }
});

header2.addEventListener('click', () => {
    // Добавить или удалить класс 'open' для header2
    header2.classList.toggle('open');
    
    // Убедиться, что класс 'open' удаляется у header, если он был
    if (header.classList.contains('open')) {
        header.classList.remove('open');
    }
});



// Carousel
$(document).ready(function(){
    // Инициализация первой карусели
    $('.carousel1').carousel({
        fullWidth: false,
        indicators: true
    });

    // Инициализация второй карусели
    $('.carousel2').carousel({
        fullWidth: false,
        indicators: true
    });

    // Автопрокрутка первой карусели
    setInterval(() => {
        $('.carousel1').carousel('next');
    }, 3000);

    // Автопрокрутка второй карусели
    setInterval(() => {
        $('.carousel2').carousel('next');
    }, 4000);
});