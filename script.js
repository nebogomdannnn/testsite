// Анимация появления элементов при прокрутке
document.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.menu-item');
    let windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
